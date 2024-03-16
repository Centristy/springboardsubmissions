from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class PetAddForm(FlaskForm):
    """Form for adding users."""

    name = StringField('Name', validators=[DataRequired()])
    species = SelectField('species', choices=['Dog', 'Cat', 'Porcupine', 'Pig'], validators=[DataRequired()])
    photo_url = StringField('(Opt) Photo URL')
    age = IntegerField('(Opt) Age')
    notes = StringField('(Opt) Notes')
    available = BooleanField('Available', default = True)


class PetEditForm(FlaskForm):
    """Form for adding users."""

    name = StringField('Name')
    species = SelectField('Species', choices=['Dog', 'Cat', 'Porcupine', 'Pig'])
    photo_url = StringField('(Opt) Photo URL')
    age = IntegerField('(Opt) Age')
    notes = StringField('(Opt) Notes')
    available = BooleanField('Available', default = True)
    
    
