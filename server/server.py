from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__, template_folder="../public", static_folder="../public/dist")
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://localhost/quick_quotes'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True)

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return '<User %r>' % self.username

@app.route("/", defaults={'path': ''})
@app.route("/<path:path>")
def index(path):
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)