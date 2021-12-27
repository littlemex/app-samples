module github.com/littlemex/app-samples/src

go 1.17

require (
	github.com/aws/aws-sdk-go v1.41.0
	github.com/gin-gonic/gin v1.6.3
	github.com/jinzhu/gorm v1.9.15
	local.packages/models v0.0.0-00010101000000-000000000000
	local.packages/sample v0.0.0-00010101000000-000000000000
)

require (
	github.com/gin-contrib/sse v0.1.0 // indirect
	github.com/go-playground/locales v0.13.0 // indirect
	github.com/go-playground/universal-translator v0.17.0 // indirect
	github.com/go-playground/validator/v10 v10.2.0 // indirect
	github.com/golang/protobuf v1.3.3 // indirect
	github.com/jinzhu/inflection v1.0.0 // indirect
	github.com/jmespath/go-jmespath v0.4.0 // indirect
	github.com/json-iterator/go v1.1.9 // indirect
	github.com/leodido/go-urn v1.2.0 // indirect
	github.com/lib/pq v1.1.1 // indirect
	github.com/mattn/go-isatty v0.0.12 // indirect
	github.com/modern-go/concurrent v0.0.0-20180228061459-e0a39a4cb421 // indirect
	github.com/modern-go/reflect2 v0.0.0-20180701023420-4b7aa43c6742 // indirect
	github.com/ugorji/go/codec v1.1.7 // indirect
	golang.org/x/sys v0.0.0-20210423082822-04245dca01da // indirect
	gopkg.in/yaml.v2 v2.2.8 // indirect
)

replace local.packages/domains => ./domains

replace local.packages/models => ./models

replace local.packages/sample => ./sample
