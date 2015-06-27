# boostrap-alerts
A simple Meteor JS boostrap alerts

based on bojicas:bootstrap-alerts 

USAGE
meteor add jcharvet:bootstrap-alerts


    Add {{> BootstrapAlerts}} to your template / layout.
    Call alerts with Alerts.set('content', 'type'), where type can take following values:
        success
        info
        warning
        danger

Note that you can call Alerts.set('content'); (without a second parameter) in order to get an alert of danger type.

LICENSE
MIT