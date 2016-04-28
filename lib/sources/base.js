/**
 * @fileoverview Provide zz.ui.mdl.slider base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Aleksander)
 */

goog.provide( 'zz.ui.mdl.slider' );

goog.require( 'goog.ui.decorate' );

goog.require( 'zz.ui.mdl.Slider' );
goog.require( 'zz.ui.mdl.slider.tpl' );
goog.require( 'zz.tests.models.SimplestDataset' );

/**
 * Base namespace for zz.ui.mdl.slider module.
 * @const
 */
zz.ui.mdl.slider = zz.ui.mdl.slider || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.slider.bootstrap = function( ){

    var simpleModelDataset = goog.global.simpleModelDataset = new zz.tests.models.SimplestDataset( );
    var simpleModelDatarow = goog.global.simpleModelDatarow = simpleModelDataset.createFirst( );

    goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.SliderRenderer.CSS_CLASS, function( ){

        return new zz.ui.mdl.Slider( );
    } );

    soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.slider.tpl.default );
	var sldr1 = goog.ui.decorate( goog.dom.getElement( '1' ) );
    sldr1.setModel( simpleModelDataset, simpleModelDatarow, simpleModelDataset.datafield.nmbr );
	sldr1.setEnabled( true );
};
goog.exportSymbol( 'zz.ui.mdl.slider.bootstrap', zz.ui.mdl.slider.bootstrap );