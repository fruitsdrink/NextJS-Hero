# NestJS Hero

## curl 调用 api

参考：https://www.warp.dev/terminus/post-json-data-with-curl?gad_source=1&gclid=CjwKCAiAtNK8BhBBEiwA8wVt9-zJG3fMQYPvFzrlQsXneb0bERv4hubDQDMj6ikr-0bmKew5EPy91RoCD1oQAvD_BwE

- post

```bash
curl -X POST -H 'Content-Type: application/json' -d '{"<key>":"<value>", ...}' <url>
```

curl 版本如果大于 7.82.0 则可以使用 --json 参数

```
curl --json '{"<key>":"<value>", ...}' <url>
```

使用文件

```
curl -X POST -H 'Content-Type: application/json' -d @<file> <url>
```
