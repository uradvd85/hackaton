modules.define('i-bem__dom', ['dom'], function(provide, dom, BEMDOM) {

BEMDOM.decl('input', {
    beforeSetMod : {
        'focused' : {
            true : function() {
                if(this.hasMod('disabled'))
                    return false;
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                var control = this.elem('control');

                this._val = control.val();
                this._focused = dom.containsFocus(control);

                this._focused?
                    this.setMod('focused') : // if control already in focus we need to set focused mod
                    this.hasMod('focused') && this._focus(); // if block already has focused mod we need to focus control
            }
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').attr('disabled', modVal);
        },

        'focused' : function(modName, modVal) {
            modVal?
                this._focused || this._focus() :
                this._focused && this._blur();

            this.emit(modVal? 'focus' : 'blur');
        }
    },

    /**
     * Returns control value
     * @returns {String}
     */
    getVal : function() {
        return this._val;
    },

    /**
     * Sets control value
     * @param {String} val value
     * @param {Object} [data] additional data
     * @returns {this}
     */
    setVal : function(val, data) {
        val = String(val);

        if(this._val !== val) {
            this._val = val;
            this.elem('control').val(val);
            this.emit('change', data);
        }

        return this;
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.elem('control').attr('name');
    },

    _onFocus : function() {
        this._focused = true;
        this.setMod('focused');
    },

    _onBlur : function() {
        this._focused = false;
        this.delMod('focused');
    },

    _focus : function() {
        this.elem('control').focus();
    },

    _blur : function() {
        this.elem('control').blur();
    }
}, {
    live : function() {
        this
            .liveBindTo('control', 'focusin', function(e) {
                this._onFocus(e);
            })
            .liveBindTo('control', 'focusout', function(e) {
                this._onBlur(e);
            });

        return false;
    }
});

provide(BEMDOM);

});
