import { Component } from '@angular/core';
import { Broadcaster } from '../shared/broadcast/broadcast';
import { Http } from '@angular/http';
import { filter } from 'lodash';

@Component({
    moduleId: module.id,
    selector: 'as-scan',
    templateUrl: 'scanReport.html'
})
export class ScanReportComponent {
    selectedTheme: any;
    selectedStep: any;
    consentForms: any;
    selectedTextIndex: any;
    headingvalues: any;
    complianceTextvalues: any;
    nextComplianceTextvalues: any;
    scannedUrl: any;
    checkedConsentCount: any;
    showScannedUrl: any;
    showOnValue: any;
    constructor(public broadcaster: Broadcaster, http: Http) {
        this.broadcaster.broadcast('NavbarStatus', false);
        this.selectedTheme = '';
        this.selectedStep = 'step-1';
        this.selectedTextIndex = 0;
        this.headingvalues = '';
        this.showOnValue = '';
        this.complianceTextvalues = '';
        this.nextComplianceTextvalues = '';
        this.checkedConsentCount = 0;
        this.scannedUrl = 'http://www.techcrunch.com';
        let value = this.scannedUrl;
        value = value.replace('http://', '');
        value = value.replace('https://', '');
        this.showScannedUrl = value;
        this.consentForms = [{
            'type': 'Account creation',
            'desc': 'Data needed create a system accounts',
            'isChecked': false,
            'heading': '',
            'consentText': 'I agree that ' + value + ' store and use my name (firstname, lastname)' +
            'and email address to create an account on ' + value + ', and receive updates about the product. \n \n' +
            value + ' provide One-Click Privacy Protection (read more). Enter your email and we’ll send' +
            'you a link to remove your consent easily and permanently.',
            'consentGroup': 'personalinfo',
            'showOn': 'button',
        },
            {
                'type': 'Newsletter sign-up',
                'desc': 'Data needed to add a user to mailing lists',
                'isChecked': true,
                'heading': '(Automatically checked as detected by our machine learning algorithm)',
                'consentText': 'I agree that ' + value + ' store my name (firstname, lastname) and email address' +
                ' to send me weekly newsletters from ' + value + '. \n \n' +
                value + ' provide One-Click Privacy Protection (read more). Enter your email and we’ll send' +
                'you a link to remove your consent easily and permanently.',
                'consentGroup': 'personalinfo',
                'showOn': 'button',
            },
            {
                'type': 'Track website visitors',
                'desc': 'Data tracked when new and existing visitors come to your website',
                'isChecked': true,
                'heading': '(Automatically checked based on your usage of Google Analytics)',
                'consentText': 'We use 3rd party tools including Google Analytics, Kissmetrics and Intercom to get' +
                ' analytical information about our visitors, including number of visitors, sites they visit and where they' +
                ' come from. I agree that ' + value + ' uses these 3rd party tools.\n \n' +
                value + ' provide One-Click Privacy Protection (read more). Enter your email and we’ll send' +
                'you a link to remove your consent easily and permanently.',
                'consentGroup': 'personalinfo',
                'showOn': 'page',
            },
            {
                'type': 'Search data',
                'desc': 'Data stored to improve the search results, show recommended products etc.',
                'isChecked': true,
                'heading': '(Automatically checked based on your usage of Elastic)',
                'consentText': 'I agree that  ' + value + '  store and process my searches to provide better'
                + ' future searches for me and other users.\n \n' +
                value + ' provide One-Click Privacy Protection (read more). Enter your email and we’ll send' +
                'you a link to remove your consent easily and permanently.',
                'consentGroup': 'personalinfo',
                'showOn': 'button',
            },
            {
                'type': 'Receive payment',
                'desc': 'store credit card information used to process payment transactions',
                'isChecked': true,
                'heading': '(Automatically checked based on your usage of Paypal)',
                'consentText': 'We use 3rd party tools including Paypal, Stripe and Braintree to process transactions.' +
                'I agree that' + value + '  will send your credit card information securely to the payment providers of your choosing.\n \n' +
                value + ' provide One-Click Privacy Protection (read more). Enter your email and we’ll send' +
                'you a link to remove your consent easily and permanently.',
                'consentGroup': 'personalinfo',
                'showOn': 'button',
            },
            {
                'type': 'Show ads',
                'desc': 'Track data to show targeted ads based on browsing behavior',
                'isChecked': false,
                'heading': '',
                'consentText': 'We show ads from 3rd plugins, such as Doubleclick and Google Adwords to fund our website operations.' +
                'I agree to send my IP address and click statistics to 3rd party network when I click the banners.\n \n' +
                value + ' provide One-Click Privacy Protection (read more). Enter your email and we’ll send' +
                'you a link to remove your consent easily and permanently.',
                'consentGroup': 'personalinfo',
                'showOn': 'page',
            },
            {
                'type': 'Location based services',
                'desc': 'Based on current location, show recommendations places within proximity',
                'isChecked': false,
                'heading': '',
                'consentText': 'We use a 3rd party tool, Google Maps, to provide recommendations on places to visit in your area.' +
                'I agree that ' + value + '  uses these 3rd party tools. \n \n' +
                value + ' provide One-Click Privacy Protection (read more). Enter your email and we’ll send' +
                'you a link to remove your consent easily and permanently.',
                'consentGroup': 'personalinfo',
                'showOn': 'page',
            },
            {
                'type': 'Other',
                'desc': 'Specify any other data you collect on your website',
                'isChecked': false,
                'heading': '',
                'consentText': '',
                'consentGroup': 'personalinfo',
                'showOn': 'page',
            },
        ];
        this.getCheckedCount('value');
    }

    onKeyHeading(event: any) {
        this.headingvalues = event.target.value;
    }
    onKeyComplianceText(event: any) {
        this.complianceTextvalues = event.target.value;
    }
    getCheckedCount(value) {
            let checked: any = filter(this.consentForms,
            function (o: any) { if (o.isChecked === true) { return o; } });
            console.log(checked);
            this.checkedConsentCount = checked.length;
    }
}
