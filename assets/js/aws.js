(function () {
    // var bucketName = 'websiteEmailSender';
    // var appId = 'YOUR_APP_ID';
    // var roleArn = 'YOUR_ROLE_ARN';
    // AWS.config.region = 'YOUR_BUCKET_REGION';
    //
    // var fbUserId;
    // var bucket = new AWS.S3({
    //     params: {
    //         Bucket: bucketName
    //     }
    // });

    AWS.config.update({accessKeyId: 'AKIAI65KRFLLU466Y5WQ', secretAccessKey: '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', region:'Mumbai'})
    lambda = new AWS.Lambda({region: 'Mumbai'});
    var myform = $("form#myform");
    myform.submit(function(event){
        event.preventDefault();
        if(document.getElementById("message_html").value) {
            trigger_params = {
                FunctionName: 'websiteEmailSender', // the lambda function File Trigger with parameters
                // InvocationType: 'Event',
                // LogType: 'Tail',
                Payload: JSON.stringify({ contact_id: document.getElementById("message_html").value })
            };
            lambda.invoke(trigger_params, function(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Lambda FileTrigger said '+ data.Payload);
                }
            });
            // var params = {
            //     contact_id: document.getElementById("message_html").value,
            //     ACL: 'public-read'
            // };
            // myform.find("button").text("Sending...");
            // bucket.invoke(params, function (err, data) {
            //     if (err) {
            //         console.log(err)
            //     } else {
            //         console.log(data)
            //     }
            // });
            // var params = {
            //     Destination: {
            //         CcAddresses: [
            //             // 'EMAIL_ADDRESS',
            //         ],
            //         ToAddresses: [
            //             'info@lumiq.ai',
            //         ]
            //     },
            //     Message: {
            //         Body: {
            //             Text: {
            //                 Charset: "UTF-8",
            //                 Data: "TEXT_FORMAT_BODY"
            //             }
            //         },
            //         Subject: {
            //             Charset: 'UTF-8',
            //             Data: 'Query from lumiq.ai website'
            //         }
            //     },
            //     Source: document.getElementById("message_html").value,
            //     ReplyToAddresses: [
            //         document.getElementById("message_html").value
            //     ],
            // };
            // var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();
            // sendPromise.then(
            //     function(data) {
            //         console.log(data.MessageId);
            //     }).catch(
            //     function(err) {
            //         console.error(err, err.stack);
            //     });
        }
    });
})();