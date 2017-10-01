from flask import Flask, flash, redirect, render_template, request, session, abort
from asyncio.base_events import Server
app = Flask(__name__)
 
@app.route("/")
def index():
    return render_template("index.html")
 
if __name__ == "__main__":
    app.run("0.0.0.0", 80, debug=True, use_reloader=False)