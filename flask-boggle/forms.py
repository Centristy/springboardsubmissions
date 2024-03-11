from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Email, Length


class WordForm(FlaskForm):
    """Form adding Words."""

    word = StringField('word', validators=[DataRequired()])
