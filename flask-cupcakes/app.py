from flask import Flask, jsonify, render_template, flash, request, redirect
from models import db, connect_db, Cupcake
import requests
from forms import CupcakeAddForm, CupcakeEditForm

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "oh-so-secret"

connect_db(app)



####################################### USER ROUTES ##########################

@app.route('/', methods=["GET", "POST"])
def homepage():
    """"Show homepage"""

    form = CupcakeAddForm()
    editform = CupcakeEditForm()

    cupcakes = requests.get('http://127.0.0.1:5000/api/cupcakes')


    return render_template('homepage.html', form = form, cupcakes=cupcakes.json()['cupcakes'])
    

@app.route("/cupcake/delete/<int:cupcake_id>", methods=["GET"])
def cupcake_delete_user(cupcake_id):
    """View cupcakes"""

    requests.delete(f"http://127.0.0.1:5000/api/cupcakes/{cupcake_id}")


    return redirect("/")


@app.route("/cupcake/edit/<int:cupcake_id>", methods=["GET", "POST"])
def cupcake_edit(cupcake_id):
    """Editcupcakes"""

    form = CupcakeEditForm()

    if request.method == "POST" and form.validate_on_submit:

        cupcake = Cupcake.query.get_or_404(cupcake_id)
        cupcake.flavor= form.flavor.data,
        cupcake.rating= form.rating.data,
        cupcake.size= form.size.data,
        if form.image.data:
            cupcake.image= form.image.data,

        db.session.commit()

        return redirect("/")


    return render_template('edit.html', form = form)



####################################### API ROUTES ###########################

@app.route("/api/cupcakes", methods=["GET"])
def cupcake_create():
    """View cupcakes"""

    cupcakes = [cupcake.to_dict() for cupcake in Cupcake.query.all()]
    return jsonify(cupcakes=cupcakes)






@app.route("/api/cupcakes", methods=["POST"])
def create_cupcake():
    """Add cupcake, and return data about new cupcake.

    Returns JSON like:
        {cupcake: [{id, flavor, rating, size, image}]}
    """

    data = request.json

    cupcake = Cupcake(
        flavor=data['flavor'],
        rating=data['rating'],
        size=data['size'],
        image=data['image'] or None)

    db.session.add(cupcake)
    db.session.commit()

    # POST requests should return HTTP status of 201 CREATED
    return (jsonify(cupcake=cupcake.to_dict()), 201)
    

@app.route("/api/cupcakes/<int:cupcake_id>", methods=["GET"])
def cupcake_call(cupcake_id):
    """Returns Cupcake"""

    cupcake = Cupcake.query.get_or_404(cupcake_id)
    return jsonify(cupcake=cupcake.to_dict())



@app.route("/api/cupcakes/<int:cupcake_id>", methods=["DELETE"])
def cupcake_delete(cupcake_id):
    """Returns Cupcake"""

    cupcake = Cupcake.query.get_or_404(cupcake_id)
    db.session.delete(cupcake)
    db.session.commit()
    return (jsonify(f"Cupcake {cupcake.id} deleted!"), 200 )





