#########################################
#                                       #
#             443D_fructe.py            #
#                                       #
#########################################

'''
 ------------------------------------
    #05. GHIOJDEANU C.O. Ştefan-Mihnea - cireasa
 ------------------------------------
'''

@app.route("/cireasa", methods=['GET'])
def obtine_cireasa():
    ret = "<h1>cireasa:</h1>"
    ret += "<b>Culoare: </b>"
    ret += lib.biblioteca_fructe.culoare_cireasa()
    ret += "<br>"

    ret += "<b>Gust: </b>"
    ret += lib.biblioteca_fructe.gust_cireasa()
    ret += "<br>"

    ret += "<b>Anotimp: </b>"
    ret += lib.biblioteca_fructe.anotimp_cireasa()
    ret += "<br>"

    print("DBG: apel obtine_cireasa")
    return ret

@app.route("/cireasa/culoare", methods=['GET'])
def obtine_culoare_cireasa():
    ret = ""
    ret += lib.biblioteca_fructe.culoare_cireasa()
    return ret

@app.route("/cireasa/gust", methods=['GET'])
def obtine_gust_cireasa():
    ret = ""
    ret += lib.biblioteca_fructe.gust_cireasa()
    return ret

@app.route("/cireasa/anotimp", methods=['GET'])
def obtine_anotimp_cireasa():
    ret = ""
    ret += lib.biblioteca_fructe.anotimp_cireasa()
    return ret



#########################################
#                                       #
#         biblioteca_fructe.py          #
#                                       #
#########################################

'''
 ------------------------------------
    #05. GHIOJDEANU C.O. Ştefan-Mihnea - cireasa
 ------------------------------------
'''

def culoare_cireasa():
    return("rosu")

def gust_cireasa():
    return("dulce")

def anotimp_cireasa():
    return("vara")



#########################################
#                                       #
#      test_biblioteca_fructe.py        #
#                                       #
#########################################

'''
 ------------------------------------
    #05. GHIOJDEANU C.O. Ştefan-Mihnea - cireasa
 ------------------------------------
'''

def test_culoare_cireasa():
    cul = b_fructe.culoare_cireasa()
    if cul == 'rosu':
        assert True
    else:
        assert False

def test_gust_cireasa():
    inf = b_fructe.gust_cireasa()
    if inf == 'dulce':
        assert True
    else:
        assert False

def test_anotimp_cireasa():
    inf = b_fructe.anotimp_cireasa()
    if inf == 'vara':
        assert True
    else:
        assert False
