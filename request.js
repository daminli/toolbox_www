var response = {
	"response" : {
		"header" : {
			"status" : "SUCCESS",
			"status_code" : "001",
			"status_desc" : "call atp successfull"
		},
		"data" : {
			"cart_id" : "XXXXXX",
			"country" : "XXX",
			"action" : "QUERY", // QUERY, CONFIRM, RESERVE
			"items" : [ {
				"line_num" : "XXXX",
				"product_num" : "XXXX",
				"quantity" : 10,
				"product_type" : "CTO",
				"psd" : "2017/07/10",
				"source" : "L420",
				"status" : "success"

			}, {
				"line_num" : XXXX,
				"product_num" : XXXX,
				"quantity" : 10,
				"product_type" : "CTO",
				"psd" : "",
				"source" : "0110",
				"status" : "no-plant"
			}, {
				"line_num" : XXXX,
				"product_num" : XXXX,
				"quantity" : 10,
				"product_type" : "CTO",
				"psd" : "",
				"source" : "L420",
				"status" : "no-atp"
			} ]
		}
	}
}

var request = {
	"request" : {
		"cart_id" : "XXXXXX",
		"country" : "XXX",
		"action" : "QUERY", // QUERY, CONFIRM, RESERVE
		"items" : [ {
			"line_num" : "XXXX",
			"product_num" : "XXXX",
			"quantity" : 10,
			"product_type" : "CTO",
			"config" : {
				"CPU" : "I7",
				"MEM" : "16G"
			}
		}, {
			"line_num" : XXXX,
			"product_num" : XXXX,
			"quantity" : 10,
			"product_type" : "CTO",
			"config" : {
				"CPU" : "I7",
				"MEM" : "16G"
			}
		} ]
	}
}
