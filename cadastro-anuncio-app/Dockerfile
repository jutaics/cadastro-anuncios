FROM registryk8s.xyz.com.br:80/node_builder_alpine:2.0.0 as builder

ARG build_env
ARG sonar_host_env
ARG sonar_login_env

RUN mkdir -p /tmp/app

WORKDIR /tmp/app/

COPY . /tmp/app/

RUN npm install
RUN ng test --code-coverage --browsers ChromeHeadlessNoSandbox
RUN sonar-scanner -Dsonar.host.url=${sonar_host_env} -Dsonar.login=${sonar_login_env} -Dsonar.sourceEncoding=UTF-8 -Dsonar.exclusions=**/node_modules/**,**/coverage/** -Dsonar.test.inclusions=**/*.spec.ts -Dsonar.typescript.lcov.reportPaths=../coverage/lcov.info
RUN ng build -c=${build_env}

FROM registryk8s.xyz.com.br:80/base/alpine-httpd24:stable

COPY --from=builder /tmp/app/dist /usr/local/apache2/htdocs/

EXPOSE 80

CMD ["httpd-foreground"]
