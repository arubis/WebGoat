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

                getFlights:function() {
                    var fromField = $('#travelFrom');
                    var toField = $('#travelTo');
                    var escapeXml = function(unsafe) {
                        return unsafe.replace(/[<>&'"]/g, function (c) {
                            switch (c) {
                                case '<': return '&lt;';
                                case '>': return '&gt;';
                                case '&': return '&amp;';
                                case '\'': return '&apos;';
                                case '"': return '&quot;';
                            }
                        });
                    };
                    var xml = '<?xml version="1.0"?>' +
                        '<searchForm>' +
                        '  <from>' + escapeXml(fromField.value()) + '</from>' +
                        '</searchForm>';
                    return xml;
                },
            }

            return customGoat;
    });
