from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/honors-algebra-2')
def honors_algebra_2():
    return render_template('honors-algebra-2.html')

@app.route('/honors-precalculus')
def honors_precalculus():
    return render_template('honors-precalculus.html')

if __name__ == '__main__':
    app.run(debug=True)