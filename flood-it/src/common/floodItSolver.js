
var _gadgetID = 10;
var w;

function c() {
    var n = new Array("#7e9d1e", "#dc4a20", "#46b1e2", "#ed70a1", "#605ca8", "#f3f61d");
    var d = 14;
    var g = 14;
    var f = 25;
    var o = new Array(g);
    var m = new Array(g);
    var r = new Array(g);
    var F = 0;
    this.v = function() {
        var H, col;
        var l;
        for (H = 0; H < g; H++) {
            o[H] = new Array(d);
            m[H] = new Array(d);
            r[H] = new Array(d);
            for (col = 0; col < d; col++) {
                r[H][col] = document.getElementById("cl" + this.K(H) + this.K(col));
                if (r[H][col]) {
                    l = Math.floor(Math.random() * n.length);
                    r[H][col].style.backgroundColor = n[l];
                    m[H][col] = n[l];
                }
            }
        }
        o[0][0] = 1;
        try {
            this.k(0, 0, m[0][0]);
        } catch (e) {}
        for (H = 0; H < g; H++) {
            for (col = 0; col < d; col++) {
                if (o[H][col] == 2) {
                    o[H][col] = 1;
                }
            }
        }
        F = 0;
        document.getElementById("G").innerHTML = "Round " + F + "/25";
        document.getElementById("C").style.visibility = "hidden";
    };
    this.K = function(z) {
        if (z < 10) return "0" + z;
        return String(z);
    };
    this.A = function(D) {
        var H, col;
        var I = 0;
        for (H = 0; H < g; H++) {
            for (col = 0; col < d; col++) {
                if (o[H][col] == 1) {
                    try {
                        this.k(H, col, D);
                    } catch (e) {}
                }
            }
        }
        for (H = 0; H < g; H++) {
            for (col = 0; col < d; col++) {
                if (o[H][col] == 2 || o[H][col] == 1) {
                    o[H][col] = 1;
                    I++;
                }
            }
        }
        F++;
        document.getElementById("G").innerHTML = "Round " + F + "/25";
        if (I == (d * g)) {
            this.t(true);
        } else if (F >= f) {
            this.t(false);
        }
    };
    this.k = function(H, col, D) {
        if ((H < 0) || (col < 0) || (H > (g - 1)) || (col > (d - 1))) {
            return;
        }
        if (o[H][col] > 1) {
            return;
        }
        if (o[H][col] == 1) {
            o[H][col] = 2;
            m[H][col] = D;
            r[H][col].style.backgroundColor = D;
            this.k(H - 1, col, D);
            this.k(H + 1, col, D);
            this.k(H, col - 1, D);
            this.k(H, col + 1, D);
            return;
        } else if (m[H][col] == D) {
            o[H][col] = 1;
            this.k(H, col, D);
        }
    };
    this.t = function(j) {
        if (j) {
            document.getElementById("J").innerHTML = "You Won!";
            document.getElementById("B").innerHTML = "You did it in " + F + " rounds";
        } else {
            document.getElementById("J").innerHTML = "You Lost!";
            document.getElementById("B").innerHTML = "You exceeded 25 rounds";
        }
        document.getElementById("C").style.visibility = "visible";
    }
}