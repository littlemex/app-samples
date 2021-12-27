package main

import (
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
	"local.packages/sample"
	"github.com/littlemex/app-samples/src/sample2"
)

func main() {
	// dynamodb
	// https://docs.aws.amazon.com/sdk-for-go/v1/developer-guide/dynamo-example-list-tables.html
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.GET("/test", handleGetTest)
	r.GET("/user", handleGetUsers)
	r.GET("/user/:uid", handleGetUser)
	r.POST("/user", handlePostUser)
	r.Run()
}

func handleGetTest(c *gin.Context) {
	var a, _ = strconv.Atoi(c.Query("a"))
	var b, _ = strconv.Atoi(c.Query("b"))
	var res int = sample.Add(a, b)
	sample2.Add(1, 10)
	c.JSON(200, gin.H{
		"add": res,
	})
}

func handleGetUsers(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "ユーザ一覧が返る予定",
	})
}

func handleGetUser(c *gin.Context) {
	uid := c.Param("uid")
	// TODO: dynamoからid = uidのユーザ名を取得する
	// TODO: テーブル名を環境変数からとる -> CDK側で実装する必要あり
	// tableName := os.Getenv("DYNAMODB_TABLE")
	// descDynamoDB()
	descRedshift()
	c.JSON(200, gin.H{
		"message": fmt.Sprintf("Hello %s", uid),
	})
}

func handlePostUser(c *gin.Context) {
	// TODO: 新規作成するユーザのIDを決定
	// TODO: ペイロードからユーザ名を取得
	// TODO: ユーザ登録
	c.JSON(200, gin.H{
		"message": "ユーザ登録できたよ",
	})
}
