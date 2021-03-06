const bucket = "demo-cf-image-resize"
const url = "/photos/cat-image_500x300xcover.jpg"

export const cfResponse = {
  "Records": [
    {
      "cf": {
        "request": {
          "origin": {
            "s3": {
              "authMethod": "none",
              "customHeaders": {},
              "domainName": `${bucket}.s3.amazonaws.com`,
              "path": "",
              "region": "ap-souteast-1"
            }
          },
          "querystring": "",
          "uri": url
        },
        "response": {
          "headers": {},
          "status": "403",
          "statusDescription": "Forbidden"
        }
      }
    }
  ]
}
