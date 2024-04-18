jQuery(function($) {

    $('.mobile-toggle .fa-bars').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });



    $('.homeslider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 400,
        } );




    $('.same-height').matchHeight({
        byRow: false,
    });

    $('.home-news-text').matchHeight({
        byRow: true,
    });



    $(window).resize(function() {
        //equal heights
     $('.height-main').each(function(){
         var prntheight = $(this).height();
         $(this).parent().children('.height-child').height(prntheight);
     })
    });

    $(window).resize();


    $('.js-fillcolor').fillColor({ type: 'avgYUV' });


    //socialmedia


    var s = $(".socialwrapper");
    var winheigt = $(window).height() /2;
    var pos = s.position();
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        if ( windowpos <= winheigt) {
            s.addClass("socialshow");
        } else {
            s.removeClass("socialshow");
        }
    });



    $('.scroll-btm').click(function(){
        $('html, body').animate({
            scrollTop: $('#scrollbox').offset().top - 20 }, 'slow');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop()>0)
        {
            $('.scroll-btm').fadeOut();
        }
        else
        {
            $('.scroll-btm').fadeIn();
        }

    });

    $(".menu > li.menu-item-has-children  ").addClass('firstlevel');
    $('.firstlevel').hover(
        function () {
            $('.dropdown-menu').fadeOut(100);
            $(this).children('.dropdown-menu').fadeIn(100);
            $('.current-menu-parent').addClass('hideafter');
            $('.current-menu-ancestor').addClass('hideafter');
        },
        function () {
            $('.dropdown-menu').fadeOut(100);
            $('.current-menu-parent').children('.dropdown-menu').fadeIn(100);
            $('.current-menu-parent').removeClass('hideafter');
            $('.current-menu-ancestor').removeClass('hideafter');
            $('.current-menu-ancestor .dropdown-menu').fadeIn(100);
        }
    );






    $('.current-leader-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.leaders-info',
        dots: false,
        centerMode: false,
        infinite: false,
        arrows: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                }
            }
            ]
    });


    $('.leaders-info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: false,
        infinite: false,
        dots: false,
        fade: true,
        asNavFor: '.current-leader-nav',
        adaptiveHeight: true,
    });



    $('.former-leader-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        centerMode: false,
        infinite: true,
        arrows: true,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });





    $('.environmental-details .env-data-box:odd').addClass('odd');
    $('.environmental-details .env-data-box:even').addClass('even');

    $('.whysrilanka-details .whysrilanka-data-box:odd').addClass('odd');
    $('.whysrilanka-details .whysrilanka-data-box:even').addClass('even');





    $('.accordianbox').each(function() {
        function close_accordion_section() {
            $('.collapse-line h4').removeClass('active');
            $('.collapse-line .collapsdata').slideUp(300).removeClass('open');
            $('.collapse-line').removeClass('active');
        }

        $('.collapse-line h4').click(function(e) {
            // Grab current anchor value
            var currentAttrValue = $(this).next('.collapsdata');

            if($(e.target).is('.active')) {
                close_accordion_section();
            }else {
                close_accordion_section();

                // Add active class to section title
                $(this).addClass('active');
                // Open up the hidden content panel
                $(currentAttrValue).slideDown(300).addClass('open');
                $(this).parent('.collapse-line').addClass('active');
            }

            e.preventDefault();
        });
    });



    $('.back-link a').click(function(){
        parent.history.back();
        return false;
    });




    $('.share-fb').click(function(){
            var sharelink = $(this).attr('href');
            var sharetitle = $(this).attr('title');
            window.open("https://www.facebook.com/sharer/sharer.php?u="+sharelink+"&t="+sharetitle, '',
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
            return false;
        }
    );


    $('.share-tw').click(function()
        {
            var sharelink = $(this).attr('href');
            var sharetitle = $(this).attr('title');
            window.open("https://twitter.com/intent/tweet/?text="+sharetitle+" - Read More &url="+sharelink+"&t="+sharetitle, '',
                'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
            return false; }
    );




    $('.tariff-line-table').basictable({
        breakpoint: 783,
    });


    var marketsum = 0;
    $('.chart-labels ul li span').each(function(){
        marketsum += parseFloat($(this).text());
    });
    $('.chart-labels ul li span').each(function(){
        var singlevalue = parseFloat($(this).text());
        var singlepercentage = ((singlevalue / marketsum) *100 ).toFixed(2);
        $(this).html(singlepercentage + '%');
     });



     $('.next.page-numbers').text(">>");
    $('.prev.page-numbers').text("<<");



    $('#menu-social-items li a').attr('target', '_blank');;


    $('.yearly-table tr').each(function () {
        var sum = 0
        $(this).find('.value').each(function () {
            var combat = $(this).text();
            if (!isNaN(combat) && combat.length !== 0) {
                sum += parseFloat(combat);
            }
        });
        $(this).children('.total').html(sum.toFixed(2));
    });


    var firstyear =  $('.yearly-table tr:first-child .td-title').html();
    var lastyear =   $('.yearly-table tr:last-child .td-title').html();
    $('.year-start').html(lastyear);
    $('.year-end').html(firstyear);


    $('.yearly-table').basictable({
        breakpoint: 783,
    });





    function close_yeartable() {
        $('.yearly-tabs li a').removeClass('active');
        $('.yearly-tab-data').slideUp(300).removeClass('open');
    }

    $('.yearly-tabs li a').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('tabindex');

        if($(e.target).is('.active')) {

        }else {
            close_yeartable();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });




    //monthly table
    jQuery.each($("table.monthly-table tr"), function() {
        $(this).children(":eq(0)").after($(this).children(":eq(4)"));
        $(this).children(":eq(1)").after($(this).children(":eq(4)"));
        $(this).children(":eq(4)").after($(this).children(":eq(3)"));
    });




    //creating charts

    $('.monthly-table-box').each(function(){

        yearArray =[];
        $(this).find('th').children('b').each(function() {
            yearArray.push($(this).html());
        });

        usArray = [];
        $(this).find('.us-data').children('.chart-data').each(function() {
            usArray.push($(this).html());
        });
        euArray = [];
        $(this).find('.eu-data').children('.chart-data').each(function() {
            euArray.push($(this).html());
        });
        otherArray = [];
        $(this).find('.other-data').children('.chart-data').each(function() {
            otherArray.push($(this).html());
        });


        var ctx = $(this).children('.canvers-wrap-out ').children('.canvers-wrap').children(".chartbox");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: yearArray,
                datasets: [
                    {
                        data: usArray,
                        label: "US",
                        borderColor: "#832EC8",
                        fill: true,
                        backgroundColor: 'rgba(183,127,255,0.9)'
                    },

                    {
                        data: euArray,
                        label: "EU",
                        borderColor: "#DA246F",
                        fill: true,
                        backgroundColor: 'rgba(239,107,143,0.9)'
                    },


                    {
                        data: otherArray,
                        label: "Other",
                        borderColor: "#C58E1B",
                        fill: true,
                        backgroundColor: 'rgba(239,194,1,0.9)'
                    },

                ]
            },

            options: {
                responsive: true,
                cutoutPercentage: 55,
                legend:{
                    display: true,
                    position: "top",
                    labels: {
                        boxWidth: 13,
                    }
                },
                tooltips: {
                    titleFontSize:16,
                    displayColors:false,
                        callbacks: {
                            label: function(tooltipItem, data) {
                                var label = data.datasets[tooltipItem.datasetIndex].label || '';

                                if (label) {
                                    label += ': ';
                                }
                                label += Math.round(tooltipItem.yLabel * 100) / 100+ ' US$ Mn';
                                return label;
                            }
                        }


                },
                scales: {
                    xAxes: [{
                        stacked: true,
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }

            }
        });

    });



   $('.monthly-table').each(function(){
       $(this).find('td.Untitled-row').html('-');

       $(this).find('tr').each(function(){

           var valCurrent = $(this).children('.currentVal').html();
           var valPrev = $(this).children('td:nth-child(5n)').html();
           var percentageVal = ((valCurrent - valPrev) / valPrev )* 100;
           $(this).children('.percentage').html(percentageVal.toFixed(2)+'%');


           if ($(this).children('.percentage').text() == 'NaN%') {
               $(this).children('.percentage').text('0')
           }

           if ($(this).children('.percentage').text() == 'Infinity%') {
               $(this).children('.percentage').text('No Enough Data')
           }
       });

   });






    var date = new Date(),
        monthsArray = [],
        month;

    monthsArray = [];
    $('#monthselector option').each(function() {
        monthsArray.push($(this).val())
    });

    month = monthsArray[date.getMonth()+1];
    $('.month-'+month).show();

    $('#monthselector').change(function(){
        $('.monthly-table-box').hide();
        $('.month-' + $(this).val()).show();
    });



    $('.responsive-tb').basictable({
        breakpoint: 783,
    });


    $('body.single').children('.socialwrapper').remove();




    $('#yearselector').on('change', function () {
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });



    $(".chart-data > .bt-content").each(function() {
        var newvalue = $(this).text();
        var valueB = parseFloat(newvalue).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

        if (!isNaN(newvalue)){
            $(this).text(valueB);
        } else {

        }


    });

    $('.yearly-table .value .bt-content').each(function() {
        var newvalue = $(this).text();
        var valueB = parseFloat(newvalue).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

        if (!isNaN(newvalue)){
            $(this).text(valueB);
        } else {
        }
    });

    $('.tariff-line-table td .bt-content').each(function() {
        var newvalue = $(this).text();
        var valueB = parseFloat(newvalue).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

        if (!isNaN(newvalue)){
            $(this).text(valueB);
        } else {
        }
    });


    var yearofexport = (new Date()).getFullYear();
    var currentYear = $('.menu #menu-item-894 a').attr('href').replace("currentYear", yearofexport);
    $('.menu #menu-item-894 a').attr('href', currentYear);






});