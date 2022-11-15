from flask import Flask, render_template, jsonify, redirect, request
from flask_sqlalchemy import SQLAlchemy
import json
import requests

# Creating App
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
app.secret_key = "super-secret-key"
db = SQLAlchemy(app)


# Creating Database
class Blogs(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    blogtitle = db.Column(db.String(500), nullable=False)
    blogslug = db.Column(db.String(100), nullable=False)
    blogimg = db.Column(db.Text, nullable=False)
    blogshortdesc = db.Column(db.String(500), nullable=False)
    blogmeta = db.Column(db.Text, nullable=False)
    blogdesc = db.Column(db.Text, nullable=False)

    def __init__(
        self, sno, blogtitle, blogslug, blogimg, blogshortdesc, blogmeta, blogdesc
    ):
        self.sno = sno
        self.blogtitle = blogtitle
        self.blogslug = blogslug
        self.blogimg = blogimg
        self.blogshortdesc = blogshortdesc
        self.blogmeta = blogmeta
        self.blogdesc = blogdesc


# Opeang config.json file
with open("config.json", "r") as c:
    params = json.load(c)["params"]


# Main Response
response = {"status-code": 406, "response": False, "value-data": "Error: Bad Response"}


# main route #
@app.route("/", methods=["GET", "POST"])
def home():
    return jsonify(response), response["status-code"]


# Multi Blogs Route #
@app.route("/bloggyblogs/<key>/blogs", methods=["GET", "POST"])
def showAllBlogs(key):
    print(response)
    try:
        if request.method == "GET":
            if key == params["PUBLIC_SERVER_KEY"]:
                results = Blogs.query.all()
                dataresponse = []
                for result in results:
                    dataresponse.append(
                        {
                            "sno": result.sno,
                            "blogtitle": result.blogtitle,
                            "blogslug": result.blogslug,
                            "blogimg": result.blogimg,
                            "blogshortdesc": result.blogshortdesc,
                            "blogmeta": result.blogmeta,
                            "blogdesc": result.blogdesc,
                        }
                    )
                responseData = {
                    "status-code": 200,
                    "data-response": True,
                    "value-data": dataresponse,
                }
                return jsonify(responseData)
    except Exception as e:
        return jsonify(response)


# One Blog Route #
@app.route("/bloggyblogs/<key>/blog/<int:blogsno>", methods=["GET", "POST"])
def showSoloBlog(blogsno, key):
    if request.method == "GET":
        if key == params["PUBLIC_SERVER_KEY"]:
            blog = Blogs.query.filter_by(sno=blogsno).first()
            response = {
                "status-code": 200,
                "response": True,
                "value-data": {
                    "sno": blog.sno,
                    "blogtitle": blog.blogtitle,
                    "blogslug": blog.blogslug,
                    "blogimg": blog.blogimg,
                    "blogshortdesc": blog.blogshortdesc,
                    "blogmeta": blog.blogmeta,
                    "blogdesc": blog.blogdesc,
                },
            }
    return jsonify(response), response["status-code"]


# Add Blogs route
@app.route("/bloggyblogs/<key>/add/blog", methods=["GET", "POST"])
def addBlogs(key):
    if request.method == "POST":
        if key == params["PUBLIC_SERVER_KEY"]:
            verify = json.loads(request.data)["private-server-key"]
            print(verify)
            if verify == params["PRIVATE_SERVER_KEY"]:
                data = json.loads(request.data)
                blogtitle = data["blogtitle"]
                blogslug = data["blogslug"]
                blogimg = data["blogimg"]
                blogshortdesc = data["blogshortdesc"]
                blogmeta = data["blogmeta"]
                blogdesc = data["blogdesc"]

                sno = 0
                getsno = Blogs.query.all()
                for onsno in getsno:
                    sno = onsno.sno + 1

                query = Blogs(
                    sno=sno,
                    blogtitle=blogtitle,
                    blogslug=blogslug,
                    blogimg=blogimg,
                    blogshortdesc=blogshortdesc,
                    blogmeta=blogmeta,
                    blogdesc=blogdesc,
                )
                db.session.add(query)
                db.session.commit()

                responseData = {
                    "status-code": 200,
                    "response": True,
                    "value-data": {
                        "Data-Add": True,
                        "Error": False,
                        "data": {
                            "sno": sno,
                            "blogtitle": blogtitle,
                            "blogslug": blogslug,
                            "blogimg": blogimg,
                            "blogshortdesc": blogshortdesc,
                            "blogmeta": blogmeta,
                            "blogdesc": blogdesc,
                        },
                    },
                }
                return jsonify(responseData)

    return jsonify(response), response["status-code"]


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)
