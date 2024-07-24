from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///announcements.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Announcement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    birth_date = db.Column(db.String(100))
    death_date = db.Column(db.String(100))
    age = db.Column(db.String(50))
    ceremony_address = db.Column(db.String(200))
    ceremony_time = db.Column(db.String(100))
    funeral_address = db.Column(db.String(200))
    funeral_time = db.Column(db.String(100))

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    flower_type = db.Column(db.String(50))
    quantity = db.Column(db.Integer)
    total_amount = db.Column(db.Float)
    invoice_needed = db.Column(db.Boolean)
    invoice_title = db.Column(db.String(100))
    recipient_name = db.Column(db.String(100))
    recipient_address = db.Column(db.String(200))

class Photo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    filename = db.Column(db.String(200))

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/order')
def order():
    return render_template('order.html')

@app.route('/submit-announcement', methods=['POST'])
def submit_announcement():
    data = request.form.to_dict()
    new_announcement = Announcement(
        name=data.get('name'),
        birth_date=data.get('birth_date'),
        death_date=data.get('death_date'),
        age=data.get('age'),
        ceremony_address=data.get('ceremony_address'),
        ceremony_time=data.get('ceremony_time'),
        funeral_address=data.get('funeral_address'),
        funeral_time=data.get('funeral_time')
    )
    db.session.add(new_announcement)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/submit-order', methods=['POST'])
def submit_order():
    data = request.form.to_dict()
    invoice_needed = data.get('invoice') == '需要發票'
    total_amount = float(data.get('amount'))
    if invoice_needed:
        total_amount *= 1.1  # 添加10%的费用
    new_order = Order(
        name=data.get('name'),
        flower_type=data.get('flower_type'),
        quantity=data.get('quantity'),
        total_amount=total_amount,
        invoice_needed=invoice_needed,
        invoice_title=data.get('invoice_title'),
        recipient_name=data.get('recipient_name'),
        recipient_address=data.get('recipient_address')
    )
    db.session.add(new_order)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/process-payment', methods=['POST'])
def process_payment():
    data = request.form.to_dict()
    if data.get('invoice') == '需要發票':
        data['amount'] = float(data['amount']) * 1.05  # 添加10%的费用
    # 在这里处理支付逻辑
    return jsonify({'status': 'success', 'data': data})

@app.route('/upload-photo', methods=['POST'])
def upload_photo():
    if 'photo' not in request.files:
        return jsonify({'status': 'fail', 'message': 'No file part'})
    file = request.files['photo']
    if file.filename == '':
        return jsonify({'status': 'fail', 'message': 'No selected file'})
    if file:
        filename = file.filename
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        new_photo = Photo(filename=filename)
        db.session.add(new_photo)
        db.session.commit()
        return jsonify({'status': 'success', 'filename': filename})

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
