# DynamoDB local

cd scripts

- createcredentials
- createtable
- listtable


## dynamodbへのアクセスの仕方

- guregu/dynamodb  
	https://qiita.com/uchiko/items/b419d512f08279ab0f9c#guregudynamo%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B
- pure sdk
	受け取りがだるい、interfaceで柔軟に結果を受け取れそう
- v2
	describetable, scanitemしかない。dynamodb local使えん
- v1
	https://docs.aws.amazon.com/ja_jp/sdk-for-go/v1/developer-guide/dynamo-example-create-table.html
	https://docs.aws.amazon.com/sdk-for-go/api/service/dynamodb/dynamodbattribute/
	https://zenn.dev/a_ichi1/articles/2baf3d32b12741

## redshiftへのアクセスの仕方

localstack利用

dynamodbと同様にdummy credentialsを作る

- https://github.com/localstack/localstack
