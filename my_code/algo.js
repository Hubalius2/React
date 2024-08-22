document.addEventListener('click', function (event) {
    if (event.target.textContent.includes('Te llamamos')) {
        var assistedCategory = '';

        if (event.target.matches('#stickyAssisted *')) {
            assistedCategory = 'sticky';
        } else if (event.target.matches('#main-header *')) {
            assistedCategory = 'header';
        } else {
            assistedCategory = 'none';
        }

        sessionStorage.setItem('assistedCategory', assistedCategory);

        if (assistedCategory != 'header' && assistedCategory != 'none') {
            dataLayer.push({
                'event': 'gaEvent',
                'eventCategory': 'callMeBack',
                'eventAction': 'call_me_back_click',
                'eventLabel': 'call_me_back_click_' + assistedCategory
            });
        }
    }

    if (event.target.textContent.includes('Te ayudamos')) {
        sessionStorage.setItem('assistedCategory', 'header');
    }

    var telRegex = /\d\d\d/;
    if (event.target.textContent.includes('Llámanos') || event.target.textContent.match(telRegex)) {
        var assistedCategory = '';

        if (event.target.matches('#stickyAssisted *')) {
            assistedCategory = 'sticky';
            dataLayer.push({
                'event': 'gaEvent',
                'eventCategory': 'callNow',
                'eventAction': 'call_now_click',
                'eventLabel': 'call_now_click_' + assistedCategory
            });
        } else if (event.target.matches('#main-header *')) {
            assistedCategory = 'header';
            if (event.target.id == 'phoneNumber') {
                dataLayer.push({
                    'event': 'gaEvent',
                    'eventCategory': 'callNow',
                    'eventAction': 'call_now_click',
                    'eventLabel': 'call_now_click_btn_' + assistedCategory
                });
            }
        } else {
            assistedCategory = 'none';
        }
    }
});