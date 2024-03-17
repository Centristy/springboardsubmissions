from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, IntegerField, BooleanField
from wtforms.validators import DataRequired

class CupcakeAddForm(FlaskForm):
    """Form for adding cupcakes"""

    flavor = StringField('Flavor', validators=[DataRequired()])
    size = SelectField('Size', choices=['small', 'medium', 'large', 'x-large'], validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired()])
    image = StringField('Photo')


class CupcakeEditForm(FlaskForm):
    """Form for editing cupcakes"""
    flavor = StringField('Flavor', validators=[DataRequired()])
    size = SelectField('Size', choices=['small', 'medium', 'large', 'x-large'], validators=[DataRequired()])
    rating = IntegerField('Rating', validators=[DataRequired()])
    image = StringField('Photo')

