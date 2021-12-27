// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX - License - Identifier: Apache - 2.0
package main

import (
	"fmt"
	"os"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

func descDynamoDB() {
	tableName := os.Getenv("DYNAMODB_TABLE")
	// FIXME: DYNAMO_ENDPOINTの有無でcreateClient, createClientDevを呼び分ける
	// FIXME: Client作成とクエリ処理を分ける
	createClientDev(tableName)
}

func createClientDev(table string) {
	// FIXME: 引数に切り出す
	const AWS_REGION = "ap-northeast-1"
	const DYNAMO_ENDPOINT = "http://dynamodbdev:8000"

	dynamoSession := session.Must(session.NewSession(&aws.Config{
		Region:      aws.String(AWS_REGION),
		Endpoint:    aws.String(DYNAMO_ENDPOINT),
		Credentials: credentials.NewStaticCredentials("dummy", "dummy", "dummy"),
	}))
	db := dynamodb.New(dynamoSession)

	res, err := db.GetItem(&dynamodb.GetItemInput{
		TableName: aws.String(table),
		Key: map[string]*dynamodb.AttributeValue{
			"UserID": {
				S: aws.String("1"),
			},
		},
		ConsistentRead:         aws.Bool(true),
		ReturnConsumedCapacity: aws.String("NONE"),
	})

	if err != nil {
		panic(err)
	}

	fmt.Println(*res)
	fmt.Println(*res.Item["Name"])
}
