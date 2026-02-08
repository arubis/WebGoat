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

                escapeXml:function(unsafe) {
                    if (!unsafe) return '';
                    return unsafe.replace(/[<>&'"]/g, function (c) {
                        switch (c) {
                            case '<': return '&lt;';
                            case '>': return '&gt;';
                            case '&': return '&amp;';
                            case '\'': return '&apos;';
                            case '"': return '&quot;';
                            default: return c;
                        }
                    });
                },

                getFlights:function() {
                    var fromField = $('#travelFrom');
                    var toField = $('#travelTo');
                    var xml = '<?xml version="1.0"?>' +
                        '<searchForm>' +
                        '  <from>' + this.escapeXml(fromField.value()) + '</from>' +
                        '</searchForm>';
                    return xml;
                },
            }

            return customGoat;
    });
