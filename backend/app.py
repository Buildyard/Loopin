from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/test', methods=['GET'])
def test_endpoint():
    return jsonify({"message": "Hello from Backend!"})

if __name__ == "__main__":
    app.run(port=5000, debug=True)

