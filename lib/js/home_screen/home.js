/**
 * Handle some of the Home section functinos
 */

$(function () {
    'use strict';

    // Ask for Estimation button
    $('#askForEstimationButton').click(function () {

        // set the contact subject
        $('#subject').val('Sujet : Demande d\'un devis');

        // set the beginning of the message
        $('#message').val('Message : Je souhaite avoir un devis concernant la réalisation ...');
    });

});