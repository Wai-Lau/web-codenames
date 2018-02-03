from flask import Flask, render_template
import md5
import random
import datetime
import json

app = Flask(__name__)

sessions = {}

@app.route('/info')
def main():
    return render_template("main.html", message=json.dumps(sessions))

@app.route('/create')
def create_room():
    now = datetime.datetime.now()
    rand = random.random()
    m = md5.new()
    m.update(str(now)+str(rand))
    room = m.hexdigest().encode('utf-8').strip()[:6]
    sessions[room] = {}

    sessions[room]['red'] = {}
    sessions[room]['red']['players'] = 0
    sessions[room]['shared'] = {}
    sessions[room]['shared']['players'] = 0
    sessions[room]['blue'] = {}
    sessions[room]['blue']['players'] = 0

    return render_template("main.html", message=json.dumps(sessions))

@app.route('/spymaster/<room>/<color>')
def create_spymaster_and_join(room, color):
    color = color.lower()
    if room in sessions:
        if color == 'red' or color == 'blue' or color == 'shared':
            message = create_spymaster(room, color)
            return render_template("main.html", message=message+"<br>Welcome {} spymaster. Here is your spymaster key: {}".format(color, sessions[room]['master_key']))
    return render_template("main.html", message="ERROR FEELIN LIMIC")

@app.route('/play/<room>/<color>/<name>')
def play(room, color, name):
    color = color.lower()
    if room in sessions:
        return render_template("main.html", message="Welcome to {} team's room, {}.".format(color, name))
    return render_template("main.html", message="ERROR FEELIN LIMIC")

@app.route('/playmaster/<room>/<master_key>/<color>/<name>')
def play_master(room, master_key, color, name):
    color = color.lower()
    if room in sessions and master_key in sessions[room] and sessions[room]['master_key'] == master_key:
        return render_template("main.html", message="Welcome to {} team's room, {}.".format(color, name))
    return render_template("main.html", message="ERROR FEELIN LIMIC")

def create_spymaster(room, color):
    if 'master_key' not in sessions[room]:
        now = datetime.datetime.now()
        rand = random.random()
        m = md5.new()
        m.update(str(now)+str(rand))
        master_key = m.hexdigest().encode('utf-8').strip()[:6]
        sessions[room]['master_key'] = master_key
    sessions[room][color]['players'] += 1
    if 'spymaster' in sessions[room][color]:
        return "{} spymaster for room {} already exists.".format(color, room)
    sessions[room][color]['spymaster'] = True
    return "{} spymaster for room {} created.".format(color, room)
