from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Pet(db.Model):
    """User in the system."""

    __tablename__ = 'pets'

    id = db.Column(
        db.Integer,
        primary_key=True,
    )

    name = db.Column(
        db.Text,
        nullable=False,
    )

    species = db.Column(
        db.Text,
        nullable=False,
    )


    photo_url = db.Column(
        db.Text,
        default = "/static/default.jpg"
    )

    age = db.Column(
        db.Integer,
    )

    notes = db.Column(
        db.Text,
    )

    available = db.Column(
        db.Boolean,
    )




def connect_db(app):
    """Connect this database to provided Flask app.

    You should call this in your Flask app.
    """

    db.app = app
    db.init_app(app)