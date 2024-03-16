from flask import Flask, redirect, render_template, flash
from models import db, connect_db, Pet
from forms import PetAddForm, PetEditForm
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///adoptly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = True
app.config['SECRET_KEY'] = "ABC123EFG"

connect_db(app)



@app.route('/', methods=["GET", "POST"])
def homepage():
    """View and Post up animals for Adoption"""


    form = PetAddForm()
    pets = Pet.query.all()

    if form.validate_on_submit():
        pet = Pet(
            name = form.name.data.title(),
            species = form.species.data,
            photo_url = form.photo_url.data,
            age = form.age.data,
            notes = form.notes.data,
            available = form.available.data,
            )
        
        db.session.add(pet)

        db.session.commit()

        flash("Animal Successfully Posted", 'success')

        return redirect("/")
    else:
    
        return render_template('homepage.html', form=form, pets=pets)
    


@app.route('/edit/<int:pet_id>', methods=["GET", "POST"])
def edit(pet_id):

    """edit animal up for Adoption"""

    form = PetEditForm()
    pet = Pet.query.get_or_404(pet_id)

    if form.validate_on_submit():

        pet.name = form.name.data.title(),
        pet.species = form.species.data,
        pet.photo_url = form.photo_url.data,
        pet.age = form.age.data,
        pet.notes = form.notes.data,
        if form.available:
            pet.available = True
        else:
            pet.available = False        

        db.session.commit()

        flash("Animal Successfully edited", 'success')

        return redirect("/")
        
    else:
    
        return render_template('edit.html', form=form, pet=pet)
    

@app.route('/delete/<int:pet_id>', methods=["GET", "POST"])
def delete(pet_id):

    """delete animal up for Adoption"""


    pet = Pet.query.get_or_404(pet_id)
    db.session.delete(pet)
    db.session.commit()

    flash("Animal Successfully deleted", 'success')

    return redirect("/")

