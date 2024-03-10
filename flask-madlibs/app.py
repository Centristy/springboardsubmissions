from flask import Flask, render_template, request
from stories import story

app = Flask(__name__)

app.config['SECRET_KEY'] = "it's a secret"



@app.route("/")
def homepage():
    """Generate a form to ask for the words"""

    prompts = story.prompts

    return render_template('homepage.html', prompts=prompts)

@app.route("/story")
def render_story():
    """Show the Story"""

    text = story.generate(request.args)

    return render_template("story.html", text=text)

