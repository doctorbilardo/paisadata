declare global {
  interface Window {
    analytics: {
      track: any;
      identify: any;
    };
  }
}

/*

* @method analytics.track

The Track method allows you to record the actions that users perform:

You can send this params: 
analytics.track(event, [properties], [options], [callback]);

event:	string
properties: object
options: object
callback function

*/
export const segmentTrack = (name: string, data?: object) =>
  "analytics" in window && window.analytics
    ? window.analytics.track(name, data)
    : null;

/*


* @method analytics.identify

Use the identify method to link your users and their actions, to a recognizable userId and traits

analytics.identify([userId], [traits], [options], [callback]);

Params:

- userId	required	String

- traits	optional	Object   A dictionary of traits you know about the user, like email or name
Example:

{
  "type": "identify",
  "traits": {
    "name": "Peter Gibbons",
    "email": "peter@example.com",
    "plan": "premium",
    "logins": 5
  },
  "userId": "97980cfea0067"
}

-options	optional	Object	A dictionary of options.
Example:


analytics.identify('user_123', {
  email: 'jane.kim@example.com',
  name: 'Jane Kim'
}, {
  integrations: {
    'Intercom': false,
    'Google Analytics': false
  }
});



- callback	optional	Function	A function executed after a timeout of 300 ms, giving the browser time to make outbound requests first.


*/

export const segmentUserIdentify = (user: string, data?: object) =>
  "analytics" in window && window.analytics
    ? window.analytics.identify(user, data)
    : null;
