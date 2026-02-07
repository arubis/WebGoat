define(['jquery',
    'underscore',
    'backbone',
    'libs/jquery.form'
    ],
    function($,
      _,
      Backbone,
      JQueryForm) {
        var customGoat = {

                escapeXml: function(unsafe) {
                    if (!unsafe) return '';
                    return unsafe.toString()
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&apos;');
                },

                getFlights:function() {
                    var fromField = $('#travelFrom');
                    var toField = $('#travelTo');
                    var xml = '<?xml version="1.0"?>' +
                        '<searchForm>' +
                        '  <from>' + this.escapeXml(fromField.val()) + '</from>' +
                        '</searchForm>';
                    return xml;
                },
            }

            return customGoat;
    });
