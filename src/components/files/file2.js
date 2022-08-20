const FILE2 = [
  {
    "audioCredit": {
      "agent": {
        "agentID": "101",
        "name": "Phạm Dương Duy",
        "cty": "ABC",
        "hotline": "38036384"
      },
      "customer": {
        "customerID": "101",
        "name": "Lê Văn Dạ",
        "phone": "51258501",
        "address": "Hà Nội",
        "cmnd": "58306123"
      },
      "fileURL": "talk101.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "593s",
      "date": "17/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3c56"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c55"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3c58"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c57"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3c5a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c59"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3c5c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c5b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3c5e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c5d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3c60"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c5f"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3c3c",
    "audioID": 101,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 100,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3c3e"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c3f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3c40"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c41"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3c42"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3c43"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3c44"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3c45"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3c46"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3c47"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3c48"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3c3d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 101,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3c4a"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3c4b"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c4c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3c4d"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3c4e"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3c4f"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3c50"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c51"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3c52"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c53"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3c54"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3c49"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "102",
        "name": "Phan Khánh Quyền",
        "cty": "ABC",
        "hotline": "40001550"
      },
      "customer": {
        "customerID": "102",
        "name": "Lê Khánh Hồng",
        "phone": "41917672",
        "address": "Hà Nội",
        "cmnd": "38057608"
      },
      "fileURL": "talk102.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "306s",
      "date": "28/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3c7b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c7a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3c7d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c7c"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3c7f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c7e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3c81"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c80"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3c83"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c82"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3c85"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c84"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3c61",
    "audioID": 102,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 101,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c63"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3c64"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3c65"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3c66"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3c67"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3c68"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3c69"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3c6a"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c6b"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3c6c"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3c6d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3c62"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 102,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c6f"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3c70"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3c71"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c72"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c73"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3c74"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3c75"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3c76"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3c77"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3c78"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3c79"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3c6e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "103",
        "name": "Trương An Lợi",
        "cty": "ABC",
        "hotline": "19163674"
      },
      "customer": {
        "customerID": "103",
        "name": "Phạm Dương Cảnh",
        "phone": "85700437",
        "address": "Hà Nội",
        "cmnd": "80599542"
      },
      "fileURL": "talk103.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "404s",
      "date": "11/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ca0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3c9f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ca2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ca1"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ca4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ca3"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ca6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ca5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ca8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ca7"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3caa"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ca9"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3c86",
    "audioID": 103,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 102,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3c88"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3c89"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3c8a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3c8b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3c8c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3c8d"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3c8e"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3c8f"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3c90"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3c91"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3c92"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3c87"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 103,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3c94"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3c95"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3c96"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c97"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3c98"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3c99"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3c9a"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3c9b"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3c9c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3c9d"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3c9e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3c93"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "104",
        "name": "Lê Hải Cảnh",
        "cty": "ABC",
        "hotline": "58366748"
      },
      "customer": {
        "customerID": "104",
        "name": "Lê Dương Ánh",
        "phone": "16253935",
        "address": "Hà Nội",
        "cmnd": "86086816"
      },
      "fileURL": "talk104.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "520s",
      "date": "23/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3cc5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3cc4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3cc7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3cc6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3cc9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3cc8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ccb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3cca"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ccd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ccc"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ccf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3cce"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3cab",
    "audioID": 104,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 103,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3cad"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3cae"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3caf"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3cb0"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3cb1"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3cb2"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3cb3"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3cb4"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3cb5"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3cb6"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3cb7"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3cac"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 104,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3cb9"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3cba"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3cbb"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3cbc"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3cbd"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3cbe"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3cbf"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3cc0"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3cc1"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3cc2"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3cc3"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3cb8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "105",
        "name": "Đặng Quốc Duy",
        "cty": "ABC",
        "hotline": "58147635"
      },
      "customer": {
        "customerID": "105",
        "name": "Trương Thị Thái Qúy",
        "phone": "42993660",
        "address": "Hà Nội",
        "cmnd": "17226027"
      },
      "fileURL": "talk105.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "222s",
      "date": "26/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3cea"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ce9"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3cec"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ceb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3cee"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ced"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3cf0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3cef"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3cf2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3cf1"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3cf4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3cf3"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3cd0",
    "audioID": 105,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 104,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3cd2"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3cd3"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3cd4"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3cd5"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3cd6"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3cd7"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3cd8"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3cd9"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3cda"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3cdb"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3cdc"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3cd1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 105,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3cde"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3cdf"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3ce0"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3ce1"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3ce2"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3ce3"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3ce4"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3ce5"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3ce6"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3ce7"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3ce8"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3cdd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "106",
        "name": "Lê Minh Cảnh",
        "cty": "ABC",
        "hotline": "34018894"
      },
      "customer": {
        "customerID": "106",
        "name": "Huỳnh Khánh Hồng",
        "phone": "98743935",
        "address": "Hà Nội",
        "cmnd": "26074232"
      },
      "fileURL": "talk106.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "92s",
      "date": "23/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d0f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d0e"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d11"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d10"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d13"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d12"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d15"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d14"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d17"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d16"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d19"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d18"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3cf5",
    "audioID": 106,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 105,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3cf7"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3cf8"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3cf9"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3cfa"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3cfb"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3cfc"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3cfd"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3cfe"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3cff"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3d00"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d01"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3cf6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 106,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d03"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d04"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d05"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3d06"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d07"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3d08"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3d09"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d0a"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d0b"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d0c"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3d0d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3d02"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "107",
        "name": "Ngô Văn Duy",
        "cty": "ABC",
        "hotline": "12620499"
      },
      "customer": {
        "customerID": "107",
        "name": "Trương Văn An",
        "phone": "40874389",
        "address": "Hà Nội",
        "cmnd": "96786653"
      },
      "fileURL": "talk107.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "161s",
      "date": "31/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d34"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d33"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d36"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d35"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d38"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d37"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d3a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d39"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d3c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d3b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d3e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d3d"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3d1a",
    "audioID": 107,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 106,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3d1c"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3d1d"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3d1e"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d1f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d20"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3d21"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d22"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d23"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d24"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d25"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d26"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3d1b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 107,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3d28"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d29"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d2a"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3d2b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3d2c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d2d"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3d2e"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d2f"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3d30"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d31"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d32"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3d27"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "108",
        "name": "Trương Dương Lợi",
        "cty": "ABC",
        "hotline": "12101187"
      },
      "customer": {
        "customerID": "108",
        "name": "Ngô Dương Duy",
        "phone": "81269231",
        "address": "Hà Nội",
        "cmnd": "66275908"
      },
      "fileURL": "talk108.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "323s",
      "date": "11/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d59"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d58"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d5b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d5a"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d5d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d5c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d5f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d5e"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d61"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d60"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d63"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d62"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3d3f",
    "audioID": 108,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 107,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d41"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d42"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d43"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d44"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d45"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d46"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d47"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d48"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d49"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d4a"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d4b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3d40"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 108,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d4d"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3d4e"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3d4f"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3d50"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d51"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d52"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d53"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d54"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d55"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3d56"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d57"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3d4c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "109",
        "name": "Ngô Quốc Dạ",
        "cty": "ABC",
        "hotline": "39333027"
      },
      "customer": {
        "customerID": "109",
        "name": "Huỳnh Quốc Cảnh",
        "phone": "72964581",
        "address": "Hà Nội",
        "cmnd": "68134091"
      },
      "fileURL": "talk109.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "161s",
      "date": "12/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d7e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d7d"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d80"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d7f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d82"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d81"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d84"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d83"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3d86"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d85"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3d88"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3d87"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3d64",
    "audioID": 109,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 108,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d66"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d67"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3d68"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d69"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d6a"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d6b"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d6c"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d6d"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3d6e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d6f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3d70"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3d65"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 109,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d72"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d73"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d74"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3d75"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d76"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3d77"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3d78"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d79"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d7a"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3d7b"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d7c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3d71"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "110",
        "name": "Trương Văn Duy",
        "cty": "ABC",
        "hotline": "32797887"
      },
      "customer": {
        "customerID": "110",
        "name": "Nguyễn Minh Ánh",
        "phone": "73095888",
        "address": "Hà Nội",
        "cmnd": "26387559"
      },
      "fileURL": "talk110.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "553s",
      "date": "21/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3da3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3da2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3da5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3da4"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3da7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3da6"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3da9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3da8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3dab"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3daa"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3dad"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3dac"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3d89",
    "audioID": 110,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 109,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d8b"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d8c"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d8d"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3d8e"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d8f"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d90"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d91"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3d92"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d93"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3d94"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d95"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3d8a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 110,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3d97"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d98"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3d99"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d9a"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3d9b"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3d9c"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3d9d"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3d9e"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3d9f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3da0"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3da1"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3d96"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "111",
        "name": "Trần Quốc Ánh",
        "cty": "ABC",
        "hotline": "49809550"
      },
      "customer": {
        "customerID": "111",
        "name": "Trương Khánh Hồng",
        "phone": "97575283",
        "address": "Hà Nội",
        "cmnd": "11511996"
      },
      "fileURL": "talk111.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "158s",
      "date": "2/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3dc8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3dc7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3dca"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3dc9"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3dcc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3dcb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3dce"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3dcd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3dd0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3dcf"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3dd2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3dd1"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3dae",
    "audioID": 111,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 110,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3db0"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3db1"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3db2"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3db3"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3db4"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3db5"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3db6"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3db7"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3db8"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3db9"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3dba"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3daf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 111,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3dbc"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3dbd"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3dbe"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3dbf"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3dc0"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3dc1"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3dc2"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3dc3"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3dc4"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3dc5"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3dc6"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3dbb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "112",
        "name": "Phan An Duy",
        "cty": "ABC",
        "hotline": "17117549"
      },
      "customer": {
        "customerID": "112",
        "name": "Bùi Phương Duy",
        "phone": "70665206",
        "address": "Hà Nội",
        "cmnd": "95257229"
      },
      "fileURL": "talk112.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "379s",
      "date": "6/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ded"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3dec"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3def"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3dee"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3df1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3df0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3df3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3df2"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3df5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3df4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3df7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3df6"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3dd3",
    "audioID": 112,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 111,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3dd5"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3dd6"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3dd7"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3dd8"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3dd9"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3dda"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3ddb"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3ddc"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3ddd"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3dde"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3ddf"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3dd4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 112,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3de1"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3de2"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3de3"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3de4"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3de5"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3de6"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3de7"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3de8"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3de9"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3dea"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3deb"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3de0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "113",
        "name": "Lê Văn Thái Qúy",
        "cty": "ABC",
        "hotline": "12934727"
      },
      "customer": {
        "customerID": "113",
        "name": "Huỳnh An Khánh",
        "phone": "62501310",
        "address": "Hà Nội",
        "cmnd": "83113949"
      },
      "fileURL": "talk113.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "381s",
      "date": "31/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e12"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e11"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e14"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e13"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e16"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e15"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e18"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e17"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3e1a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e19"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e1c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e1b"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3df8",
    "audioID": 113,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 112,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3dfa"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3dfb"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3dfc"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3dfd"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3dfe"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3dff"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3e00"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3e01"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e02"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e03"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e04"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3df9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 113,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e06"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3e07"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e08"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e09"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3e0a"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3e0b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e0c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e0d"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3e0e"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3e0f"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e10"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3e05"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "114",
        "name": "Lê Khánh Khánh",
        "cty": "ABC",
        "hotline": "42551227"
      },
      "customer": {
        "customerID": "114",
        "name": "Trần Quốc Duy",
        "phone": "39477757",
        "address": "Hà Nội",
        "cmnd": "52620897"
      },
      "fileURL": "talk114.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "301s",
      "date": "1/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e37"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e36"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e39"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e38"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3e3b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e3a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e3d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e3c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e3f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e3e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e41"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e40"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3e1d",
    "audioID": 114,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 113,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3e1f"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e20"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e21"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3e22"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3e23"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3e24"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e25"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3e26"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3e27"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e28"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3e29"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3e1e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 114,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e2b"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e2c"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3e2d"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3e2e"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e2f"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e30"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e31"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e32"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e33"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e34"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3e35"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3e2a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "115",
        "name": "Huỳnh Dương Dạ",
        "cty": "ABC",
        "hotline": "45293216"
      },
      "customer": {
        "customerID": "115",
        "name": "Huỳnh Khánh Khánh",
        "phone": "79908515",
        "address": "Hà Nội",
        "cmnd": "18605542"
      },
      "fileURL": "talk115.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "241s",
      "date": "5/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3e5c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e5b"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e5e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e5d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3e60"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e5f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3e62"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e61"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e64"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e63"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e66"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e65"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3e42",
    "audioID": 115,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 114,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3e44"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e45"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e46"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e47"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3e48"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3e49"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3e4a"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e4b"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3e4c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e4d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e4e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3e43"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 115,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3e50"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e51"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e52"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e53"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3e54"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e55"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e56"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e57"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3e58"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3e59"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3e5a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3e4f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "116",
        "name": "Bùi Phương Khánh",
        "cty": "ABC",
        "hotline": "36830737"
      },
      "customer": {
        "customerID": "116",
        "name": "Phan Minh Quyền",
        "phone": "78541608",
        "address": "Hà Nội",
        "cmnd": "12469163"
      },
      "fileURL": "talk116.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "260s",
      "date": "3/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3e81"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e80"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e83"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e82"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e85"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e84"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3e87"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e86"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3e89"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e88"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3e8b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3e8a"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3e67",
    "audioID": 116,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 115,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3e69"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e6a"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e6b"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e6c"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e6d"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e6e"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e6f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e70"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e71"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3e72"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3e73"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3e68"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 116,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e75"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e76"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e77"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e78"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e79"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e7a"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e7b"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3e7c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3e7d"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3e7e"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3e7f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3e74"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "117",
        "name": "Trần Hải Khánh",
        "cty": "ABC",
        "hotline": "11214665"
      },
      "customer": {
        "customerID": "117",
        "name": "Trương Quốc Dạ",
        "phone": "99576316",
        "address": "Hà Nội",
        "cmnd": "17503158"
      },
      "fileURL": "talk117.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "308s",
      "date": "19/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ea6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ea5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ea8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ea7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3eaa"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ea9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3eac"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3eab"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3eae"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ead"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3eb0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3eaf"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3e8c",
    "audioID": 117,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 116,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3e8e"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3e8f"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e90"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e91"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e92"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e93"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3e94"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3e95"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3e96"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3e97"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e98"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3e8d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 117,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e9a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3e9b"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3e9c"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3e9d"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3e9e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3e9f"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3ea0"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3ea1"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3ea2"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3ea3"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3ea4"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3e99"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "118",
        "name": "Bùi Quốc Duy",
        "cty": "ABC",
        "hotline": "62303192"
      },
      "customer": {
        "customerID": "118",
        "name": "Ngô Minh Dạ",
        "phone": "73224230",
        "address": "Hà Nội",
        "cmnd": "28854174"
      },
      "fileURL": "talk118.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "141s",
      "date": "5/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ecb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3eca"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ecd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ecc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ecf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ece"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ed1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ed0"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ed3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ed2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ed5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ed4"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3eb1",
    "audioID": 118,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 117,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3eb3"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3eb4"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3eb5"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3eb6"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3eb7"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3eb8"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3eb9"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3eba"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3ebb"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3ebc"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3ebd"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3eb2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 118,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3ebf"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3ec0"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3ec1"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3ec2"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3ec3"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3ec4"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3ec5"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3ec6"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3ec7"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3ec8"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3ec9"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3ebe"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "119",
        "name": "Nguyễn Khánh An",
        "cty": "ABC",
        "hotline": "60964866"
      },
      "customer": {
        "customerID": "119",
        "name": "Đặng Khánh Dạ",
        "phone": "98470479",
        "address": "Hà Nội",
        "cmnd": "45310674"
      },
      "fileURL": "talk119.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "194s",
      "date": "2/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ef0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3eef"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ef2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ef1"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ef4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ef3"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ef6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ef5"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ef8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ef7"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3efa"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ef9"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3ed6",
    "audioID": 119,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 118,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3ed8"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3ed9"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3eda"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3edb"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3edc"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3edd"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3ede"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3edf"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3ee0"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3ee1"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3ee2"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3ed7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 119,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3ee4"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3ee5"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3ee6"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3ee7"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3ee8"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3ee9"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3eea"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3eeb"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3eec"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3eed"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3eee"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3ee3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "120",
        "name": "Phạm Dương Khánh",
        "cty": "ABC",
        "hotline": "87825592"
      },
      "customer": {
        "customerID": "120",
        "name": "Đặng An Duy",
        "phone": "79176105",
        "address": "Hà Nội",
        "cmnd": "88641848"
      },
      "fileURL": "talk120.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "331s",
      "date": "2/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3f15"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f14"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f17"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f16"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f19"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f18"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f1b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f1a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f1d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f1c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f1f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f1e"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3efb",
    "audioID": 120,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 119,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3efd"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3efe"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3eff"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f00"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f01"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3f02"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f03"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3f04"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f05"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3f06"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f07"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3efc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 120,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f09"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3f0a"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3f0b"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f0c"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3f0d"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3f0e"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f0f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f10"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f11"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f12"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3f13"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3f08"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "121",
        "name": "Phạm Phương Lợi",
        "cty": "ABC",
        "hotline": "38714679"
      },
      "customer": {
        "customerID": "121",
        "name": "Trần Quốc Dạ",
        "phone": "77559381",
        "address": "Hà Nội",
        "cmnd": "56579635"
      },
      "fileURL": "talk121.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "53s",
      "date": "16/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f3a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f39"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3f3c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f3b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f3e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f3d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f40"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f3f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f42"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f41"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f44"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f43"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3f20",
    "audioID": 121,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 120,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f22"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f23"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3f24"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3f25"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3f26"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f27"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3f28"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3f29"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3f2a"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f2b"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f2c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3f21"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 121,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3f2e"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f2f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f30"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3f31"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3f32"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3f33"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3f34"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f35"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f36"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f37"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3f38"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3f2d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "122",
        "name": "Đặng Quốc Hồng",
        "cty": "ABC",
        "hotline": "17165009"
      },
      "customer": {
        "customerID": "122",
        "name": "Trần Quốc Duy",
        "phone": "99957046",
        "address": "Hà Nội",
        "cmnd": "96451035"
      },
      "fileURL": "talk122.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "74s",
      "date": "4/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f5f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f5e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f61"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f60"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f63"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f62"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3f65"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f64"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f67"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f66"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f69"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f68"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3f45",
    "audioID": 122,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 121,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3f47"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3f48"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f49"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f4a"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f4b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3f4c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f4d"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3f4e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f4f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f50"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f51"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3f46"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 122,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f53"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3f54"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f55"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3f56"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f57"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f58"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3f59"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3f5a"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3f5b"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3f5c"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f5d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3f52"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "123",
        "name": "Đặng Dương Cảnh",
        "cty": "ABC",
        "hotline": "14697008"
      },
      "customer": {
        "customerID": "123",
        "name": "Phan Minh Dạ",
        "phone": "86636215",
        "address": "Hà Nội",
        "cmnd": "68260610"
      },
      "fileURL": "talk123.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "374s",
      "date": "20/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f84"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f83"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f86"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f85"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f88"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f87"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3f8a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f89"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3f8c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f8b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3f8e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3f8d"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3f6a",
    "audioID": 123,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 122,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3f6c"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3f6d"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f6e"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f6f"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3f70"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f71"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f72"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3f73"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f74"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3f75"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f76"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3f6b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 123,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3f78"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f79"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3f7a"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f7b"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3f7c"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3f7d"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f7e"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3f7f"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3f80"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3f81"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3f82"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3f77"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "124",
        "name": "Huỳnh Khánh Duy",
        "cty": "ABC",
        "hotline": "83887283"
      },
      "customer": {
        "customerID": "124",
        "name": "Nguyễn Hữu Khánh",
        "phone": "37611665",
        "address": "Hà Nội",
        "cmnd": "39687936"
      },
      "fileURL": "talk124.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "18s",
      "date": "18/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3fa9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fa8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3fab"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3faa"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3fad"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fac"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3faf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fae"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3fb1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fb0"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3fb3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fb2"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3f8f",
    "audioID": 124,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 123,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f91"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3f92"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3f93"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3f94"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3f95"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3f96"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3f97"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3f98"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3f99"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3f9a"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f9b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3f90"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 124,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3f9d"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3f9e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3f9f"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3fa0"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3fa1"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3fa2"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fa3"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3fa4"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3fa5"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3fa6"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fa7"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3f9c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "125",
        "name": "Trương Khánh Lợi",
        "cty": "ABC",
        "hotline": "63378669"
      },
      "customer": {
        "customerID": "125",
        "name": "Trần Văn Lợi",
        "phone": "99576105",
        "address": "Hà Nội",
        "cmnd": "53299177"
      },
      "fileURL": "talk125.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "29s",
      "date": "27/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3fce"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fcd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3fd0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fcf"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3fd2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fd1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3fd4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fd3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3fd6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fd5"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3fd8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3fd7"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3fb4",
    "audioID": 125,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 124,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fb6"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3fb7"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3fb8"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3fb9"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3fba"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3fbb"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3fbc"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fbd"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3fbe"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3fbf"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3fc0"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3fb5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 125,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd3fc2"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3fc3"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3fc4"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3fc5"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3fc6"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fc7"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3fc8"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3fc9"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fca"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3fcb"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3fcc"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3fc1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "126",
        "name": "Nguyễn Hữu Lợi",
        "cty": "ABC",
        "hotline": "43007337"
      },
      "customer": {
        "customerID": "126",
        "name": "Bùi An Quyền",
        "phone": "23521562",
        "address": "Hà Nội",
        "cmnd": "84056433"
      },
      "fileURL": "talk126.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "384s",
      "date": "4/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ff3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ff2"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ff5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ff4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ff7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ff6"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd3ff9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ff8"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ffb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ffa"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd3ffd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd3ffc"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3fd9",
    "audioID": 126,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 125,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3fdb"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fdc"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3fdd"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3fde"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3fdf"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fe0"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3fe1"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3fe2"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd3fe3"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3fe4"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd3fe5"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3fda"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 126,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3fe7"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fe8"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd3fe9"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3fea"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd3feb"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3fec"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd3fed"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd3fee"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd3fef"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd3ff0"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd3ff1"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3fe6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "127",
        "name": "Trương Quốc An",
        "cty": "ABC",
        "hotline": "55590797"
      },
      "customer": {
        "customerID": "127",
        "name": "Trần Dương Ánh",
        "phone": "49766424",
        "address": "Hà Nội",
        "cmnd": "98343178"
      },
      "fileURL": "talk127.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "544s",
      "date": "8/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4018"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4017"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd401a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4019"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd401c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd401b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd401e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd401d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4020"
            }
          ],
          "_id": "62ebc0df8a312c984bbd401f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4022"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4021"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd3ffe",
    "audioID": 127,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 126,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4000"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4001"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4002"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4003"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4004"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4005"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4006"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4007"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4008"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4009"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd400a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd3fff"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 127,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd400c"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd400d"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd400e"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd400f"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4010"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4011"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4012"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4013"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4014"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4015"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4016"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd400b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "128",
        "name": "Lê An Lợi",
        "cty": "ABC",
        "hotline": "24552723"
      },
      "customer": {
        "customerID": "128",
        "name": "Huỳnh Dương Hồng",
        "phone": "70300615",
        "address": "Hà Nội",
        "cmnd": "22081380"
      },
      "fileURL": "talk128.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "331s",
      "date": "15/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd403d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd403c"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd403f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd403e"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4041"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4040"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4043"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4042"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4045"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4044"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4047"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4046"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4023",
    "audioID": 128,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 127,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4025"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4026"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4027"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4028"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4029"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd402a"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd402b"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd402c"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd402d"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd402e"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd402f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4024"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 128,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4031"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4032"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4033"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4034"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4035"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4036"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4037"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4038"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4039"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd403a"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd403b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4030"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "129",
        "name": "Đặng Văn Hồng",
        "cty": "ABC",
        "hotline": "59768280"
      },
      "customer": {
        "customerID": "129",
        "name": "Trương Dương Lợi",
        "phone": "47133752",
        "address": "Hà Nội",
        "cmnd": "81710464"
      },
      "fileURL": "talk129.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "367s",
      "date": "27/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4062"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4061"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4064"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4063"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4066"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4065"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4068"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4067"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd406a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4069"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd406c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd406b"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4048",
    "audioID": 129,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 128,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd404a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd404b"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd404c"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd404d"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd404e"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd404f"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4050"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4051"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4052"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4053"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4054"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4049"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 129,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4056"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4057"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4058"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4059"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd405a"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd405b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd405c"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd405d"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd405e"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd405f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4060"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4055"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "130",
        "name": "Đặng Thị Lợi",
        "cty": "ABC",
        "hotline": "90779863"
      },
      "customer": {
        "customerID": "130",
        "name": "Trương Dương An",
        "phone": "40173680",
        "address": "Hà Nội",
        "cmnd": "65690917"
      },
      "fileURL": "talk130.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "207s",
      "date": "22/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4087"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4086"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4089"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4088"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd408b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd408a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd408d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd408c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd408f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd408e"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4091"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4090"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd406d",
    "audioID": 130,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 129,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd406f"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4070"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4071"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4072"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4073"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4074"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4075"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4076"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4077"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4078"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4079"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd406e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 130,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd407b"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd407c"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd407d"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd407e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd407f"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4080"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4081"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4082"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4083"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4084"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4085"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd407a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "131",
        "name": "Nguyễn Phương An",
        "cty": "ABC",
        "hotline": "47872590"
      },
      "customer": {
        "customerID": "131",
        "name": "Huỳnh Hải Khánh",
        "phone": "68644144",
        "address": "Hà Nội",
        "cmnd": "49542621"
      },
      "fileURL": "talk131.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "220s",
      "date": "24/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40ac"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40ab"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd40ae"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40ad"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd40b0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40af"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40b2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40b1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40b4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40b3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd40b6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40b5"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4092",
    "audioID": 131,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 130,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4094"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4095"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4096"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4097"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4098"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4099"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd409a"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd409b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd409c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd409d"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd409e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4093"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 131,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd40a0"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40a1"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd40a2"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40a3"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd40a4"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd40a5"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd40a6"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd40a7"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd40a8"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd40a9"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40aa"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd409f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "132",
        "name": "Nguyễn Hải Hồng",
        "cty": "ABC",
        "hotline": "11549100"
      },
      "customer": {
        "customerID": "132",
        "name": "Phan Hữu Dạ",
        "phone": "47484099",
        "address": "Hà Nội",
        "cmnd": "77405115"
      },
      "fileURL": "talk132.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "572s",
      "date": "27/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40d1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40d0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40d3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40d2"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd40d5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40d4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40d7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40d6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd40d9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40d8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd40db"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40da"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd40b7",
    "audioID": 132,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 131,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd40b9"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40ba"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd40bb"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40bc"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd40bd"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd40be"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40bf"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40c0"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40c1"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd40c2"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40c3"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd40b8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 132,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40c5"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40c6"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40c7"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd40c8"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40c9"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd40ca"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd40cb"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd40cc"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40cd"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40ce"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd40cf"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd40c4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "133",
        "name": "Phan Thị Lợi",
        "cty": "ABC",
        "hotline": "68890841"
      },
      "customer": {
        "customerID": "133",
        "name": "Trương Hải Lợi",
        "phone": "33609106",
        "address": "Hà Nội",
        "cmnd": "39628467"
      },
      "fileURL": "talk133.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "590s",
      "date": "24/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40f6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40f5"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40f8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40f7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40fa"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40f9"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40fc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40fb"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd40fe"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40fd"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4100"
            }
          ],
          "_id": "62ebc0df8a312c984bbd40ff"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd40dc",
    "audioID": 133,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 132,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd40de"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40df"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd40e0"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40e1"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd40e2"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40e3"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40e4"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40e5"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd40e6"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd40e7"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40e8"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd40dd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 133,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd40ea"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd40eb"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd40ec"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd40ed"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd40ee"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd40ef"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd40f0"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd40f1"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd40f2"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd40f3"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd40f4"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd40e9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "134",
        "name": "Bùi Thị Cảnh",
        "cty": "ABC",
        "hotline": "38246198"
      },
      "customer": {
        "customerID": "134",
        "name": "Phan Thị An",
        "phone": "84046556",
        "address": "Hà Nội",
        "cmnd": "40582864"
      },
      "fileURL": "talk134.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "247s",
      "date": "16/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd411b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd411a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd411d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd411c"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd411f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd411e"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4121"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4120"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4123"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4122"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4125"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4124"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4101",
    "audioID": 134,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 133,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4103"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4104"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4105"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4106"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4107"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4108"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4109"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd410a"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd410b"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd410c"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd410d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4102"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 134,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd410f"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4110"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4111"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4112"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4113"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4114"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4115"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4116"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4117"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4118"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4119"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd410e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "135",
        "name": "Phạm An Lợi",
        "cty": "ABC",
        "hotline": "32106170"
      },
      "customer": {
        "customerID": "135",
        "name": "Lê Hữu Thái Qúy",
        "phone": "44687736",
        "address": "Hà Nội",
        "cmnd": "69502512"
      },
      "fileURL": "talk135.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "135s",
      "date": "17/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4140"
            }
          ],
          "_id": "62ebc0df8a312c984bbd413f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4142"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4141"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4144"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4143"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4146"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4145"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4148"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4147"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd414a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4149"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4126",
    "audioID": 135,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 134,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4128"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4129"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd412a"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd412b"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd412c"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd412d"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd412e"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd412f"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4130"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4131"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4132"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4127"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 135,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4134"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4135"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4136"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4137"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4138"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4139"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd413a"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd413b"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd413c"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd413d"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd413e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4133"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "136",
        "name": "Ngô Khánh Quyền",
        "cty": "ABC",
        "hotline": "28641635"
      },
      "customer": {
        "customerID": "136",
        "name": "Bùi Minh Thái Qúy",
        "phone": "69819783",
        "address": "Hà Nội",
        "cmnd": "56661378"
      },
      "fileURL": "talk136.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "497s",
      "date": "9/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4165"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4164"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4167"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4166"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4169"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4168"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd416b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd416a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd416d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd416c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd416f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd416e"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd414b",
    "audioID": 136,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 135,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd414d"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd414e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd414f"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4150"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4151"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4152"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4153"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4154"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4155"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4156"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4157"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd414c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 136,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4159"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd415a"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd415b"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd415c"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd415d"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd415e"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd415f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4160"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4161"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4162"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4163"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4158"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "137",
        "name": "Trương Phương Ánh",
        "cty": "ABC",
        "hotline": "56080480"
      },
      "customer": {
        "customerID": "137",
        "name": "Phan Hữu Quyền",
        "phone": "32793412",
        "address": "Hà Nội",
        "cmnd": "90705347"
      },
      "fileURL": "talk137.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "367s",
      "date": "14/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd418a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4189"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd418c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd418b"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd418e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd418d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4190"
            }
          ],
          "_id": "62ebc0df8a312c984bbd418f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4192"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4191"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4194"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4193"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4170",
    "audioID": 137,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 136,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4172"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4173"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4174"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4175"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4176"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4177"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4178"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4179"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd417a"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd417b"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd417c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4171"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 137,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd417e"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd417f"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4180"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4181"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4182"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4183"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4184"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4185"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4186"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4187"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4188"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd417d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "138",
        "name": "Trần Minh Cảnh",
        "cty": "ABC",
        "hotline": "53027368"
      },
      "customer": {
        "customerID": "138",
        "name": "Trương Phương Ánh",
        "phone": "11399368",
        "address": "Hà Nội",
        "cmnd": "88908746"
      },
      "fileURL": "talk138.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "413s",
      "date": "15/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41af"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41ae"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd41b1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41b0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41b3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41b2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41b5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41b4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41b7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41b6"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd41b9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41b8"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4195",
    "audioID": 138,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 137,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4197"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4198"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4199"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd419a"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd419b"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd419c"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd419d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd419e"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd419f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd41a0"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd41a1"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4196"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 138,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd41a3"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd41a4"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd41a5"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd41a6"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd41a7"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd41a8"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd41a9"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd41aa"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd41ab"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd41ac"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd41ad"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd41a2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "139",
        "name": "Trương Dương Thái Qúy",
        "cty": "ABC",
        "hotline": "27919736"
      },
      "customer": {
        "customerID": "139",
        "name": "Lê An Ánh",
        "phone": "89172398",
        "address": "Hà Nội",
        "cmnd": "70000574"
      },
      "fileURL": "talk139.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "125s",
      "date": "10/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41d4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41d3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41d6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41d5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41d8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41d7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41da"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41d9"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd41dc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41db"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41de"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41dd"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd41ba",
    "audioID": 139,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 138,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd41bc"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd41bd"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd41be"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd41bf"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd41c0"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd41c1"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd41c2"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd41c3"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd41c4"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd41c5"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd41c6"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd41bb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 139,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd41c8"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd41c9"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd41ca"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd41cb"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd41cc"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd41cd"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd41ce"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd41cf"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd41d0"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd41d1"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd41d2"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd41c7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "140",
        "name": "Trương Minh Khánh",
        "cty": "ABC",
        "hotline": "66971101"
      },
      "customer": {
        "customerID": "140",
        "name": "Huỳnh Hữu Cảnh",
        "phone": "91245413",
        "address": "Hà Nội",
        "cmnd": "88007515"
      },
      "fileURL": "talk140.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "239s",
      "date": "19/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41f9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41f8"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41fb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41fa"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41fd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41fc"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd41ff"
            }
          ],
          "_id": "62ebc0df8a312c984bbd41fe"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4201"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4200"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4203"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4202"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd41df",
    "audioID": 140,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 139,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd41e1"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd41e2"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd41e3"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd41e4"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd41e5"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd41e6"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd41e7"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd41e8"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd41e9"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd41ea"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd41eb"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd41e0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 140,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd41ed"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd41ee"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd41ef"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd41f0"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd41f1"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd41f2"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd41f3"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd41f4"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd41f5"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd41f6"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd41f7"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd41ec"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "141",
        "name": "Trần Khánh Dạ",
        "cty": "ABC",
        "hotline": "80700511"
      },
      "customer": {
        "customerID": "141",
        "name": "Phan Quốc Quyền",
        "phone": "56245407",
        "address": "Hà Nội",
        "cmnd": "95066810"
      },
      "fileURL": "talk141.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "316s",
      "date": "1/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd421e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd421d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4220"
            }
          ],
          "_id": "62ebc0df8a312c984bbd421f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4222"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4221"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4224"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4223"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4226"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4225"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4228"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4227"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4204",
    "audioID": 141,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 140,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4206"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4207"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4208"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4209"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd420a"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd420b"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd420c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd420d"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd420e"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd420f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4210"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4205"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 141,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4212"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4213"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4214"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4215"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4216"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4217"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4218"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4219"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd421a"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd421b"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd421c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4211"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "142",
        "name": "Phan Hữu Lợi",
        "cty": "ABC",
        "hotline": "52033205"
      },
      "customer": {
        "customerID": "142",
        "name": "Đặng Khánh Quyền",
        "phone": "67667502",
        "address": "Hà Nội",
        "cmnd": "66319705"
      },
      "fileURL": "talk142.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "429s",
      "date": "9/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4243"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4242"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4245"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4244"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4247"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4246"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4249"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4248"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd424b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd424a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd424d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd424c"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4229",
    "audioID": 142,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 141,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd422b"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd422c"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd422d"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd422e"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd422f"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4230"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4231"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4232"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4233"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4234"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4235"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd422a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 142,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4237"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4238"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4239"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd423a"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd423b"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd423c"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd423d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd423e"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd423f"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4240"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4241"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4236"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "143",
        "name": "Ngô Khánh Lợi",
        "cty": "ABC",
        "hotline": "16124901"
      },
      "customer": {
        "customerID": "143",
        "name": "Trương An Quyền",
        "phone": "17375605",
        "address": "Hà Nội",
        "cmnd": "10681131"
      },
      "fileURL": "talk143.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "143s",
      "date": "25/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4268"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4267"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd426a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4269"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd426c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd426b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd426e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd426d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4270"
            }
          ],
          "_id": "62ebc0df8a312c984bbd426f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4272"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4271"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd424e",
    "audioID": 143,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 142,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4250"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4251"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4252"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4253"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4254"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4255"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4256"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4257"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4258"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4259"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd425a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd424f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 143,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd425c"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd425d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd425e"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd425f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4260"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4261"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4262"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4263"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4264"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4265"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4266"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd425b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "144",
        "name": "Đặng Thị An",
        "cty": "ABC",
        "hotline": "59516433"
      },
      "customer": {
        "customerID": "144",
        "name": "Phan Minh Dạ",
        "phone": "90750660",
        "address": "Hà Nội",
        "cmnd": "20455401"
      },
      "fileURL": "talk144.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "571s",
      "date": "27/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd428d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd428c"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd428f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd428e"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4291"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4290"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4293"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4292"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4295"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4294"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4297"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4296"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4273",
    "audioID": 144,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 143,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4275"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4276"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4277"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4278"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4279"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd427a"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd427b"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd427c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd427d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd427e"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd427f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4274"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 144,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4281"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4282"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4283"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4284"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4285"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4286"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4287"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4288"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4289"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd428a"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd428b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4280"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "145",
        "name": "Phan Văn Duy",
        "cty": "ABC",
        "hotline": "41269411"
      },
      "customer": {
        "customerID": "145",
        "name": "Lê Minh Lợi",
        "phone": "37863828",
        "address": "Hà Nội",
        "cmnd": "30984745"
      },
      "fileURL": "talk145.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "243s",
      "date": "25/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd42b2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42b1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd42b4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42b3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42b6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42b5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd42b8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42b7"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42ba"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42b9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42bc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42bb"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4298",
    "audioID": 145,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 144,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd429a"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd429b"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd429c"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd429d"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd429e"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd429f"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd42a0"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd42a1"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd42a2"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd42a3"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd42a4"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4299"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 145,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd42a6"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd42a7"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd42a8"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd42a9"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd42aa"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd42ab"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd42ac"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd42ad"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd42ae"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd42af"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd42b0"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd42a5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "146",
        "name": "Trần Văn Hồng",
        "cty": "ABC",
        "hotline": "43633595"
      },
      "customer": {
        "customerID": "146",
        "name": "Ngô Minh An",
        "phone": "19828208",
        "address": "Hà Nội",
        "cmnd": "51741633"
      },
      "fileURL": "talk146.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "574s",
      "date": "28/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42d7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42d6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42d9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42d8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42db"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42da"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd42dd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42dc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42df"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42de"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42e1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42e0"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd42bd",
    "audioID": 146,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 145,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd42bf"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd42c0"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd42c1"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd42c2"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd42c3"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd42c4"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd42c5"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd42c6"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd42c7"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd42c8"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd42c9"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd42be"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 146,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd42cb"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd42cc"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd42cd"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd42ce"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd42cf"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd42d0"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd42d1"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd42d2"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd42d3"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd42d4"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd42d5"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd42ca"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "147",
        "name": "Lê Dương An",
        "cty": "ABC",
        "hotline": "24106967"
      },
      "customer": {
        "customerID": "147",
        "name": "Trương Hải Hồng",
        "phone": "93731562",
        "address": "Hà Nội",
        "cmnd": "45126802"
      },
      "fileURL": "talk147.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "535s",
      "date": "6/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42fc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42fb"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd42fe"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42fd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4300"
            }
          ],
          "_id": "62ebc0df8a312c984bbd42ff"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4302"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4301"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4304"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4303"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4306"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4305"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd42e2",
    "audioID": 147,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 146,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd42e4"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd42e5"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd42e6"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd42e7"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd42e8"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd42e9"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd42ea"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd42eb"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd42ec"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd42ed"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd42ee"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd42e3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 147,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd42f0"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd42f1"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd42f2"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd42f3"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd42f4"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd42f5"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd42f6"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd42f7"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd42f8"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd42f9"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd42fa"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd42ef"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "148",
        "name": "Huỳnh Thị Cảnh",
        "cty": "ABC",
        "hotline": "78113779"
      },
      "customer": {
        "customerID": "148",
        "name": "Phạm Dương Lợi",
        "phone": "21365425",
        "address": "Hà Nội",
        "cmnd": "19613372"
      },
      "fileURL": "talk148.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "195s",
      "date": "1/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4321"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4320"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4323"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4322"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4325"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4324"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4327"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4326"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4329"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4328"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd432b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd432a"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4307",
    "audioID": 148,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 147,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4309"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd430a"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd430b"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd430c"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd430d"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd430e"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd430f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4310"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4311"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4312"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4313"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4308"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 148,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4315"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4316"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4317"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4318"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4319"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd431a"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd431b"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd431c"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd431d"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd431e"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd431f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4314"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "149",
        "name": "Đặng Dương Ánh",
        "cty": "ABC",
        "hotline": "79961236"
      },
      "customer": {
        "customerID": "149",
        "name": "Ngô Phương Cảnh",
        "phone": "59577691",
        "address": "Hà Nội",
        "cmnd": "71030847"
      },
      "fileURL": "talk149.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "514s",
      "date": "14/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4346"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4345"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4348"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4347"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd434a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4349"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd434c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd434b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd434e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd434d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4350"
            }
          ],
          "_id": "62ebc0df8a312c984bbd434f"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd432c",
    "audioID": 149,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 148,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd432e"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd432f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4330"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4331"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4332"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4333"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4334"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4335"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4336"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4337"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4338"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd432d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 149,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd433a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd433b"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd433c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd433d"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd433e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd433f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4340"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4341"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4342"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4343"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4344"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4339"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "150",
        "name": "Bùi Hải Dạ",
        "cty": "ABC",
        "hotline": "26808606"
      },
      "customer": {
        "customerID": "150",
        "name": "Phan Hữu Hồng",
        "phone": "60451116",
        "address": "Hà Nội",
        "cmnd": "98029495"
      },
      "fileURL": "talk150.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "26s",
      "date": "19/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd436b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd436a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd436d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd436c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd436f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd436e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4371"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4370"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4373"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4372"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4375"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4374"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4351",
    "audioID": 150,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 149,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4353"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4354"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4355"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4356"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4357"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4358"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4359"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd435a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd435b"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd435c"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd435d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4352"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 150,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd435f"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4360"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4361"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4362"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4363"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4364"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4365"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4366"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4367"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4368"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4369"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd435e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "151",
        "name": "Huỳnh Hữu Duy",
        "cty": "ABC",
        "hotline": "74784689"
      },
      "customer": {
        "customerID": "151",
        "name": "Huỳnh Quốc Thái Qúy",
        "phone": "13354897",
        "address": "Hà Nội",
        "cmnd": "62493654"
      },
      "fileURL": "talk151.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "84s",
      "date": "2/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4390"
            }
          ],
          "_id": "62ebc0df8a312c984bbd438f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4392"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4391"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4394"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4393"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4396"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4395"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4398"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4397"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd439a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4399"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4376",
    "audioID": 151,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 150,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4378"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4379"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd437a"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd437b"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd437c"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd437d"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd437e"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd437f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4380"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4381"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4382"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4377"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 151,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4384"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4385"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4386"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4387"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4388"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4389"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd438a"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd438b"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd438c"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd438d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd438e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4383"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "152",
        "name": "Đặng Quốc Lợi",
        "cty": "ABC",
        "hotline": "81860242"
      },
      "customer": {
        "customerID": "152",
        "name": "Phan Thị An",
        "phone": "22965331",
        "address": "Hà Nội",
        "cmnd": "18779750"
      },
      "fileURL": "talk152.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "469s",
      "date": "31/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd43b5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43b4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd43b7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43b6"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd43b9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43b8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd43bb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43ba"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd43bd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43bc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd43bf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43be"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd439b",
    "audioID": 152,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 151,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd439d"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd439e"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd439f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd43a0"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd43a1"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd43a2"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd43a3"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43a4"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd43a5"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd43a6"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43a7"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd439c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 152,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd43a9"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd43aa"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd43ab"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd43ac"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd43ad"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd43ae"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd43af"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd43b0"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd43b1"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd43b2"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd43b3"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd43a8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "153",
        "name": "Lê Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "92118827"
      },
      "customer": {
        "customerID": "153",
        "name": "Trương Thị An",
        "phone": "86965753",
        "address": "Hà Nội",
        "cmnd": "83959918"
      },
      "fileURL": "talk153.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "378s",
      "date": "29/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd43da"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43d9"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd43dc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43db"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd43de"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43dd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd43e0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43df"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd43e2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43e1"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd43e4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43e3"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd43c0",
    "audioID": 153,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 152,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd43c2"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd43c3"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd43c4"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd43c5"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd43c6"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43c7"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd43c8"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43c9"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd43ca"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd43cb"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd43cc"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd43c1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 153,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43ce"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd43cf"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd43d0"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd43d1"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd43d2"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd43d3"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd43d4"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd43d5"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43d6"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd43d7"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd43d8"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd43cd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "154",
        "name": "Phan Hữu Khánh",
        "cty": "ABC",
        "hotline": "44781587"
      },
      "customer": {
        "customerID": "154",
        "name": "Ngô Phương An",
        "phone": "88198879",
        "address": "Hà Nội",
        "cmnd": "91983177"
      },
      "fileURL": "talk154.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "260s",
      "date": "27/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd43ff"
            }
          ],
          "_id": "62ebc0df8a312c984bbd43fe"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4401"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4400"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4403"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4402"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4405"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4404"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4407"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4406"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4409"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4408"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd43e5",
    "audioID": 154,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 153,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43e7"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd43e8"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd43e9"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd43ea"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43eb"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43ec"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd43ed"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd43ee"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd43ef"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd43f0"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd43f1"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd43e6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 154,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd43f3"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd43f4"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd43f5"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43f6"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43f7"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd43f8"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd43f9"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd43fa"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd43fb"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd43fc"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd43fd"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd43f2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "155",
        "name": "Phan Văn Hồng",
        "cty": "ABC",
        "hotline": "42947110"
      },
      "customer": {
        "customerID": "155",
        "name": "Ngô Hữu Duy",
        "phone": "31705415",
        "address": "Hà Nội",
        "cmnd": "91026371"
      },
      "fileURL": "talk155.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "376s",
      "date": "5/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4424"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4423"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4426"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4425"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4428"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4427"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd442a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4429"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd442c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd442b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd442e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd442d"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd440a",
    "audioID": 155,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 154,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd440c"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd440d"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd440e"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd440f"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4410"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4411"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4412"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4413"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4414"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4415"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4416"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd440b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 155,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4418"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4419"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd441a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd441b"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd441c"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd441d"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd441e"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd441f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4420"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4421"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4422"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4417"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "156",
        "name": "Huỳnh An Dạ",
        "cty": "ABC",
        "hotline": "41204600"
      },
      "customer": {
        "customerID": "156",
        "name": "Trương Thị Quyền",
        "phone": "60833916",
        "address": "Hà Nội",
        "cmnd": "56468303"
      },
      "fileURL": "talk156.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "512s",
      "date": "3/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4449"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4448"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd444b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd444a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd444d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd444c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd444f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd444e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4451"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4450"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4453"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4452"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd442f",
    "audioID": 156,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 155,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4431"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4432"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4433"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4434"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4435"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4436"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4437"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4438"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4439"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd443a"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd443b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4430"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 156,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd443d"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd443e"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd443f"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4440"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4441"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4442"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4443"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4444"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4445"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4446"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4447"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd443c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "157",
        "name": "Đặng Văn Quyền",
        "cty": "ABC",
        "hotline": "29546454"
      },
      "customer": {
        "customerID": "157",
        "name": "Trần Khánh Lợi",
        "phone": "40501472",
        "address": "Hà Nội",
        "cmnd": "61621362"
      },
      "fileURL": "talk157.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "173s",
      "date": "6/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd446e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd446d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4470"
            }
          ],
          "_id": "62ebc0df8a312c984bbd446f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4472"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4471"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4474"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4473"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4476"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4475"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4478"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4477"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4454",
    "audioID": 157,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 156,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4456"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4457"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4458"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4459"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd445a"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd445b"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd445c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd445d"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd445e"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd445f"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4460"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4455"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 157,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4462"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4463"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4464"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4465"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4466"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4467"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4468"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4469"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd446a"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd446b"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd446c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4461"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "158",
        "name": "Bùi Văn Ánh",
        "cty": "ABC",
        "hotline": "59825879"
      },
      "customer": {
        "customerID": "158",
        "name": "Trương Khánh Dạ",
        "phone": "20283144",
        "address": "Hà Nội",
        "cmnd": "16572204"
      },
      "fileURL": "talk158.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "162s",
      "date": "21/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4493"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4492"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4495"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4494"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4497"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4496"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4499"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4498"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd449b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd449a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd449d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd449c"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4479",
    "audioID": 158,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 157,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd447b"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd447c"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd447d"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd447e"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd447f"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4480"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4481"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4482"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4483"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4484"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4485"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd447a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 158,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4487"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4488"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4489"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd448a"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd448b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd448c"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd448d"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd448e"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd448f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4490"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4491"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4486"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "159",
        "name": "Trương Minh Cảnh",
        "cty": "ABC",
        "hotline": "40746710"
      },
      "customer": {
        "customerID": "159",
        "name": "Bùi Hữu Ánh",
        "phone": "63624233",
        "address": "Hà Nội",
        "cmnd": "55479693"
      },
      "fileURL": "talk159.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "35s",
      "date": "25/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd44b8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44b7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd44ba"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44b9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd44bc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44bb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd44be"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44bd"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd44c0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44bf"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd44c2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44c1"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd449e",
    "audioID": 159,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 158,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44a0"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44a1"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd44a2"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44a3"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd44a4"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44a5"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd44a6"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44a7"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44a8"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd44a9"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44aa"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd449f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 159,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd44ac"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44ad"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44ae"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44af"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44b0"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44b1"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd44b2"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd44b3"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44b4"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44b5"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd44b6"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd44ab"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "160",
        "name": "Trương Thị Ánh",
        "cty": "ABC",
        "hotline": "33862126"
      },
      "customer": {
        "customerID": "160",
        "name": "Trương Minh Quyền",
        "phone": "26152417",
        "address": "Hà Nội",
        "cmnd": "12973101"
      },
      "fileURL": "talk160.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "325s",
      "date": "7/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd44dd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44dc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd44df"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44de"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd44e1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44e0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd44e3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44e2"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd44e5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44e4"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd44e7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd44e6"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd44c3",
    "audioID": 160,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 159,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44c5"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd44c6"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd44c7"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44c8"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd44c9"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd44ca"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd44cb"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44cc"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44cd"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd44ce"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44cf"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd44c4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 160,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd44d1"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44d2"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd44d3"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd44d4"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd44d5"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd44d6"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd44d7"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44d8"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44d9"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd44da"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd44db"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd44d0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "161",
        "name": "Trần Dương Hồng",
        "cty": "ABC",
        "hotline": "16842374"
      },
      "customer": {
        "customerID": "161",
        "name": "Ngô Hải Khánh",
        "phone": "18117867",
        "address": "Hà Nội",
        "cmnd": "85389723"
      },
      "fileURL": "talk161.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "526s",
      "date": "31/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4502"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4501"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4504"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4503"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4506"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4505"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4508"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4507"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd450a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4509"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd450c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd450b"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd44e8",
    "audioID": 161,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 160,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44ea"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44eb"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd44ec"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd44ed"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44ee"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44ef"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44f0"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd44f1"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd44f2"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd44f3"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd44f4"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd44e9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 161,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44f6"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd44f7"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44f8"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44f9"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44fa"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd44fb"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd44fc"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd44fd"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd44fe"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd44ff"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4500"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd44f5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "162",
        "name": "Trương Hữu Khánh",
        "cty": "ABC",
        "hotline": "30477418"
      },
      "customer": {
        "customerID": "162",
        "name": "Ngô Minh Cảnh",
        "phone": "76230679",
        "address": "Hà Nội",
        "cmnd": "22463944"
      },
      "fileURL": "talk162.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "61s",
      "date": "28/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4527"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4526"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4529"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4528"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd452b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd452a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd452d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd452c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd452f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd452e"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4531"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4530"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd450d",
    "audioID": 162,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 161,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd450f"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4510"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4511"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4512"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4513"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4514"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4515"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4516"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4517"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4518"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4519"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd450e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 162,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd451b"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd451c"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd451d"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd451e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd451f"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4520"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4521"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4522"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4523"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4524"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4525"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd451a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "163",
        "name": "Phạm Quốc Quyền",
        "cty": "ABC",
        "hotline": "69871682"
      },
      "customer": {
        "customerID": "163",
        "name": "Ngô Hải Quyền",
        "phone": "91302470",
        "address": "Hà Nội",
        "cmnd": "45330126"
      },
      "fileURL": "talk163.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "380s",
      "date": "4/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd454c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd454b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd454e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd454d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4550"
            }
          ],
          "_id": "62ebc0df8a312c984bbd454f"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4552"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4551"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4554"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4553"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4556"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4555"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4532",
    "audioID": 163,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 162,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4534"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4535"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4536"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4537"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4538"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4539"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd453a"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd453b"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd453c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd453d"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd453e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4533"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 163,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4540"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4541"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4542"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4543"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4544"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4545"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4546"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4547"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4548"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4549"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd454a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd453f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "164",
        "name": "Bùi Hải Lợi",
        "cty": "ABC",
        "hotline": "22635105"
      },
      "customer": {
        "customerID": "164",
        "name": "Trương Minh Lợi",
        "phone": "80126563",
        "address": "Hà Nội",
        "cmnd": "91516326"
      },
      "fileURL": "talk164.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "204s",
      "date": "7/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4571"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4570"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4573"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4572"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4575"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4574"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4577"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4576"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4579"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4578"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd457b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd457a"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4557",
    "audioID": 164,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 163,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4559"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd455a"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd455b"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd455c"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd455d"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd455e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd455f"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4560"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4561"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4562"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4563"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4558"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 164,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4565"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4566"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4567"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4568"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4569"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd456a"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd456b"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd456c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd456d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd456e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd456f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4564"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "165",
        "name": "Bùi Thị Lợi",
        "cty": "ABC",
        "hotline": "52825225"
      },
      "customer": {
        "customerID": "165",
        "name": "Ngô Phương Lợi",
        "phone": "18964794",
        "address": "Hà Nội",
        "cmnd": "28632429"
      },
      "fileURL": "talk165.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "81s",
      "date": "27/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4596"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4595"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4598"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4597"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd459a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4599"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd459c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd459b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd459e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd459d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd45a0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd459f"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd457c",
    "audioID": 165,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 164,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd457e"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd457f"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4580"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4581"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4582"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4583"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4584"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4585"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4586"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4587"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4588"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd457d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 165,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd458a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd458b"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd458c"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd458d"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd458e"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd458f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4590"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4591"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4592"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4593"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4594"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4589"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "166",
        "name": "Bùi Hữu Thái Qúy",
        "cty": "ABC",
        "hotline": "19166257"
      },
      "customer": {
        "customerID": "166",
        "name": "Trần Hải Quyền",
        "phone": "23047523",
        "address": "Hà Nội",
        "cmnd": "50999692"
      },
      "fileURL": "talk166.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "58s",
      "date": "4/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd45bb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45ba"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd45bd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45bc"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd45bf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45be"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd45c1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45c0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd45c3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45c2"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd45c5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45c4"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd45a1",
    "audioID": 166,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 165,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd45a3"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd45a4"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd45a5"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd45a6"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd45a7"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45a8"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd45a9"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd45aa"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd45ab"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd45ac"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd45ad"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd45a2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 166,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd45af"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd45b0"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd45b1"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd45b2"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd45b3"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45b4"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd45b5"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45b6"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45b7"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd45b8"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd45b9"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd45ae"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "167",
        "name": "Huỳnh Khánh Cảnh",
        "cty": "ABC",
        "hotline": "47903136"
      },
      "customer": {
        "customerID": "167",
        "name": "Huỳnh Hữu An",
        "phone": "97722462",
        "address": "Hà Nội",
        "cmnd": "99734289"
      },
      "fileURL": "talk167.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "568s",
      "date": "5/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd45e0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45df"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd45e2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45e1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd45e4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45e3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd45e6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45e5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd45e8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45e7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd45ea"
            }
          ],
          "_id": "62ebc0df8a312c984bbd45e9"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd45c6",
    "audioID": 167,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 166,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45c8"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd45c9"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd45ca"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45cb"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd45cc"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd45cd"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd45ce"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd45cf"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd45d0"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd45d1"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd45d2"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd45c7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 167,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd45d4"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd45d5"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd45d6"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45d7"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd45d8"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd45d9"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd45da"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd45db"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45dc"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd45dd"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd45de"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd45d3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "168",
        "name": "Huỳnh Phương Duy",
        "cty": "ABC",
        "hotline": "99231722"
      },
      "customer": {
        "customerID": "168",
        "name": "Phạm Thị Quyền",
        "phone": "12422716",
        "address": "Hà Nội",
        "cmnd": "67014661"
      },
      "fileURL": "talk168.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "118s",
      "date": "27/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4605"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4604"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4607"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4606"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4609"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4608"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd460b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd460a"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd460d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd460c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd460f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd460e"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd45eb",
    "audioID": 168,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 167,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd45ed"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd45ee"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45ef"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd45f0"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd45f1"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd45f2"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd45f3"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd45f4"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd45f5"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd45f6"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45f7"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd45ec"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 168,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45f9"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd45fa"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd45fb"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd45fc"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd45fd"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd45fe"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd45ff"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4600"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4601"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4602"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4603"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd45f8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "169",
        "name": "Ngô Quốc Lợi",
        "cty": "ABC",
        "hotline": "12012478"
      },
      "customer": {
        "customerID": "169",
        "name": "Huỳnh Thị Thái Qúy",
        "phone": "26511222",
        "address": "Hà Nội",
        "cmnd": "22156134"
      },
      "fileURL": "talk169.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "121s",
      "date": "7/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd462a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4629"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd462c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd462b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd462e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd462d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4630"
            }
          ],
          "_id": "62ebc0df8a312c984bbd462f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4632"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4631"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4634"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4633"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4610",
    "audioID": 169,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 168,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4612"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4613"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4614"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4615"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4616"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4617"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4618"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4619"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd461a"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd461b"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd461c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4611"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 169,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd461e"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd461f"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4620"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4621"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4622"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4623"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4624"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4625"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4626"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4627"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4628"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd461d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "170",
        "name": "Đặng Hữu Ánh",
        "cty": "ABC",
        "hotline": "14494678"
      },
      "customer": {
        "customerID": "170",
        "name": "Trương Dương Dạ",
        "phone": "94438562",
        "address": "Hà Nội",
        "cmnd": "55657018"
      },
      "fileURL": "talk170.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "331s",
      "date": "25/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd464f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd464e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4651"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4650"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4653"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4652"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4655"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4654"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4657"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4656"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4659"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4658"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4635",
    "audioID": 170,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 169,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4637"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4638"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4639"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd463a"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd463b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd463c"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd463d"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd463e"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd463f"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4640"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4641"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4636"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 170,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4643"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4644"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4645"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4646"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4647"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4648"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4649"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd464a"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd464b"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd464c"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd464d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4642"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "171",
        "name": "Trương Quốc An",
        "cty": "ABC",
        "hotline": "81901783"
      },
      "customer": {
        "customerID": "171",
        "name": "Ngô Phương Ánh",
        "phone": "46374955",
        "address": "Hà Nội",
        "cmnd": "76588535"
      },
      "fileURL": "talk171.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "475s",
      "date": "2/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4674"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4673"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4676"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4675"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4678"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4677"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd467a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4679"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd467c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd467b"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd467e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd467d"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd465a",
    "audioID": 171,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 170,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd465c"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd465d"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd465e"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd465f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4660"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4661"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4662"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4663"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4664"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4665"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4666"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd465b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 171,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4668"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4669"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd466a"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd466b"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd466c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd466d"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd466e"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd466f"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4670"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4671"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4672"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4667"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "172",
        "name": "Nguyễn Thị An",
        "cty": "ABC",
        "hotline": "17488853"
      },
      "customer": {
        "customerID": "172",
        "name": "Ngô An Thái Qúy",
        "phone": "54382303",
        "address": "Hà Nội",
        "cmnd": "25663537"
      },
      "fileURL": "talk172.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "266s",
      "date": "19/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4699"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4698"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd469b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd469a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd469d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd469c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd469f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd469e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd46a1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46a0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd46a3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46a2"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd467f",
    "audioID": 172,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 171,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4681"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4682"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4683"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4684"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4685"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4686"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4687"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4688"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4689"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd468a"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd468b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4680"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 172,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd468d"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd468e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd468f"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4690"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4691"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4692"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4693"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4694"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4695"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4696"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4697"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd468c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "173",
        "name": "Trần Thị Khánh",
        "cty": "ABC",
        "hotline": "32081457"
      },
      "customer": {
        "customerID": "173",
        "name": "Phan Quốc Duy",
        "phone": "57505965",
        "address": "Hà Nội",
        "cmnd": "58023081"
      },
      "fileURL": "talk173.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "337s",
      "date": "10/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46be"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46bd"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46c0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46bf"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46c2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46c1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46c4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46c3"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46c6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46c5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd46c8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46c7"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd46a4",
    "audioID": 173,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 172,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd46a6"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46a7"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46a8"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd46a9"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd46aa"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd46ab"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46ac"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46ad"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46ae"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd46af"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd46b0"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd46a5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 173,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd46b2"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd46b3"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd46b4"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd46b5"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd46b6"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd46b7"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46b8"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd46b9"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd46ba"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd46bb"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd46bc"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd46b1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "174",
        "name": "Trương Minh Hồng",
        "cty": "ABC",
        "hotline": "33857924"
      },
      "customer": {
        "customerID": "174",
        "name": "Phạm Dương Cảnh",
        "phone": "35491648",
        "address": "Hà Nội",
        "cmnd": "54194617"
      },
      "fileURL": "talk174.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "45s",
      "date": "24/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46e3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46e2"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46e5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46e4"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46e7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46e6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd46e9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46e8"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46eb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46ea"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd46ed"
            }
          ],
          "_id": "62ebc0df8a312c984bbd46ec"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd46c9",
    "audioID": 174,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 173,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd46cb"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46cc"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd46cd"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd46ce"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd46cf"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd46d0"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd46d1"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd46d2"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd46d3"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd46d4"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd46d5"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd46ca"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 174,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd46d7"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd46d8"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd46d9"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd46da"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd46db"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd46dc"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46dd"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd46de"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd46df"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd46e0"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd46e1"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd46d6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "175",
        "name": "Ngô Văn Hồng",
        "cty": "ABC",
        "hotline": "13328235"
      },
      "customer": {
        "customerID": "175",
        "name": "Phan Hải Dạ",
        "phone": "80381209",
        "address": "Hà Nội",
        "cmnd": "81215459"
      },
      "fileURL": "talk175.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "334s",
      "date": "27/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4708"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4707"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd470a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4709"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd470c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd470b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd470e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd470d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4710"
            }
          ],
          "_id": "62ebc0df8a312c984bbd470f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4712"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4711"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd46ee",
    "audioID": 175,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 174,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd46f0"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd46f1"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd46f2"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd46f3"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd46f4"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46f5"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd46f6"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd46f7"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd46f8"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd46f9"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd46fa"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd46ef"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 175,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd46fc"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd46fd"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd46fe"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd46ff"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4700"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4701"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4702"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4703"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4704"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4705"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4706"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd46fb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "176",
        "name": "Phạm Minh An",
        "cty": "ABC",
        "hotline": "18528335"
      },
      "customer": {
        "customerID": "176",
        "name": "Trần An Dạ",
        "phone": "25139620",
        "address": "Hà Nội",
        "cmnd": "23370843"
      },
      "fileURL": "talk176.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "470s",
      "date": "31/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd472d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd472c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd472f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd472e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4731"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4730"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4733"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4732"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4735"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4734"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4737"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4736"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4713",
    "audioID": 176,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 175,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4715"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4716"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4717"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4718"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4719"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd471a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd471b"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd471c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd471d"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd471e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd471f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4714"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 176,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4721"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4722"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4723"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4724"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4725"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4726"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4727"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4728"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4729"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd472a"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd472b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4720"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "177",
        "name": "Phan Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "41454095"
      },
      "customer": {
        "customerID": "177",
        "name": "Bùi Minh Quyền",
        "phone": "79840715",
        "address": "Hà Nội",
        "cmnd": "93141711"
      },
      "fileURL": "talk177.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "162s",
      "date": "16/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4752"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4751"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4754"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4753"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4756"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4755"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4758"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4757"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd475a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4759"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd475c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd475b"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4738",
    "audioID": 177,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 176,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd473a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd473b"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd473c"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd473d"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd473e"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd473f"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4740"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4741"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4742"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4743"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4744"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4739"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 177,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4746"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4747"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4748"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4749"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd474a"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd474b"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd474c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd474d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd474e"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd474f"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4750"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4745"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "178",
        "name": "Đặng Thị An",
        "cty": "ABC",
        "hotline": "97835975"
      },
      "customer": {
        "customerID": "178",
        "name": "Trần An Duy",
        "phone": "70789466",
        "address": "Hà Nội",
        "cmnd": "22747166"
      },
      "fileURL": "talk178.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "49s",
      "date": "12/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4777"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4776"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4779"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4778"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd477b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd477a"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd477d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd477c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd477f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd477e"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4781"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4780"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd475d",
    "audioID": 178,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 177,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd475f"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4760"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4761"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4762"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4763"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4764"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4765"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4766"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4767"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4768"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4769"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd475e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 178,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd476b"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd476c"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd476d"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd476e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd476f"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4770"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4771"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4772"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4773"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4774"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4775"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd476a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "179",
        "name": "Ngô Văn An",
        "cty": "ABC",
        "hotline": "27453527"
      },
      "customer": {
        "customerID": "179",
        "name": "Phan Hải An",
        "phone": "27782802",
        "address": "Hà Nội",
        "cmnd": "16273871"
      },
      "fileURL": "talk179.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "417s",
      "date": "16/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd479c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd479b"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd479e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd479d"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd47a0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd479f"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47a2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47a1"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47a4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47a3"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47a6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47a5"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4782",
    "audioID": 179,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 178,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4784"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4785"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4786"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4787"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4788"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4789"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd478a"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd478b"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd478c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd478d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd478e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4783"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 179,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4790"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4791"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4792"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4793"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4794"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4795"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4796"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4797"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4798"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4799"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd479a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd478f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "180",
        "name": "Đặng Hữu Duy",
        "cty": "ABC",
        "hotline": "10214709"
      },
      "customer": {
        "customerID": "180",
        "name": "Phạm Dương Duy",
        "phone": "26771939",
        "address": "Hà Nội",
        "cmnd": "48401688"
      },
      "fileURL": "talk180.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "140s",
      "date": "1/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd47c1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47c0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47c3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47c2"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47c5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47c4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd47c7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47c6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47c9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47c8"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47cb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47ca"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd47a7",
    "audioID": 180,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 179,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47a9"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47aa"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd47ab"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd47ac"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd47ad"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd47ae"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd47af"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47b0"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd47b1"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd47b2"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47b3"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd47a8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 180,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd47b5"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd47b6"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd47b7"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd47b8"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd47b9"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd47ba"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd47bb"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd47bc"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd47bd"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd47be"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd47bf"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd47b4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "181",
        "name": "Phan Phương Duy",
        "cty": "ABC",
        "hotline": "16251043"
      },
      "customer": {
        "customerID": "181",
        "name": "Ngô Phương Dạ",
        "phone": "14938138",
        "address": "Hà Nội",
        "cmnd": "80764174"
      },
      "fileURL": "talk181.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "448s",
      "date": "18/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47e6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47e5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47e8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47e7"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47ea"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47e9"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd47ec"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47eb"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd47ee"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47ed"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd47f0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd47ef"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd47cc",
    "audioID": 181,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 180,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd47ce"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd47cf"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd47d0"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47d1"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd47d2"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd47d3"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd47d4"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd47d5"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd47d6"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47d7"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd47d8"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd47cd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 181,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd47da"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd47db"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47dc"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd47dd"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd47de"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd47df"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd47e0"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd47e1"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47e2"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd47e3"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd47e4"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd47d9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "182",
        "name": "Huỳnh Quốc Duy",
        "cty": "ABC",
        "hotline": "20610491"
      },
      "customer": {
        "customerID": "182",
        "name": "Lê Minh Cảnh",
        "phone": "20677888",
        "address": "Hà Nội",
        "cmnd": "75046892"
      },
      "fileURL": "talk182.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "229s",
      "date": "24/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd480b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd480a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd480d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd480c"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd480f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd480e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4811"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4810"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4813"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4812"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4815"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4814"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd47f1",
    "audioID": 182,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 181,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd47f3"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd47f4"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd47f5"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd47f6"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd47f7"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47f8"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd47f9"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd47fa"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd47fb"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd47fc"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd47fd"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd47f2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 182,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd47ff"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4800"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4801"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4802"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4803"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4804"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4805"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4806"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4807"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4808"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4809"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd47fe"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "183",
        "name": "Bùi Văn Cảnh",
        "cty": "ABC",
        "hotline": "20700832"
      },
      "customer": {
        "customerID": "183",
        "name": "Lê Phương Thái Qúy",
        "phone": "26306424",
        "address": "Hà Nội",
        "cmnd": "12639122"
      },
      "fileURL": "talk183.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "501s",
      "date": "31/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4830"
            }
          ],
          "_id": "62ebc0df8a312c984bbd482f"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4832"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4831"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4834"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4833"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4836"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4835"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4838"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4837"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd483a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4839"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4816",
    "audioID": 183,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 182,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4818"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4819"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd481a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd481b"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd481c"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd481d"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd481e"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd481f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4820"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4821"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4822"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4817"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 183,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4824"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4825"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4826"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4827"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4828"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4829"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd482a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd482b"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd482c"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd482d"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd482e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4823"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "184",
        "name": "Huỳnh Văn Thái Qúy",
        "cty": "ABC",
        "hotline": "61501745"
      },
      "customer": {
        "customerID": "184",
        "name": "Trương Minh Hồng",
        "phone": "32843609",
        "address": "Hà Nội",
        "cmnd": "66124830"
      },
      "fileURL": "talk184.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "92s",
      "date": "4/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4855"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4854"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4857"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4856"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4859"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4858"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd485b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd485a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd485d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd485c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd485f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd485e"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd483b",
    "audioID": 184,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 183,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd483d"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd483e"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd483f"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4840"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4841"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4842"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4843"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4844"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4845"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4846"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4847"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd483c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 184,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4849"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd484a"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd484b"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd484c"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd484d"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd484e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd484f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4850"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4851"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4852"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4853"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4848"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "185",
        "name": "Ngô Hải Thái Qúy",
        "cty": "ABC",
        "hotline": "38062234"
      },
      "customer": {
        "customerID": "185",
        "name": "Huỳnh Văn Dạ",
        "phone": "31686958",
        "address": "Hà Nội",
        "cmnd": "76572056"
      },
      "fileURL": "talk185.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "361s",
      "date": "9/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd487a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4879"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd487c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd487b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd487e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd487d"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4880"
            }
          ],
          "_id": "62ebc0df8a312c984bbd487f"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4882"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4881"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4884"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4883"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4860",
    "audioID": 185,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 184,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4862"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4863"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4864"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4865"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4866"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4867"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4868"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4869"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd486a"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd486b"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd486c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4861"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 185,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd486e"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd486f"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4870"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4871"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4872"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4873"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4874"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4875"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4876"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4877"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4878"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd486d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "186",
        "name": "Lê Văn Hồng",
        "cty": "ABC",
        "hotline": "93167721"
      },
      "customer": {
        "customerID": "186",
        "name": "Lê Khánh An",
        "phone": "52146978",
        "address": "Hà Nội",
        "cmnd": "22632200"
      },
      "fileURL": "talk186.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "292s",
      "date": "6/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd489f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd489e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48a1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48a0"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48a3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48a2"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd48a5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48a4"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd48a7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48a6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48a9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48a8"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4885",
    "audioID": 186,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 185,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4887"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4888"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4889"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd488a"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd488b"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd488c"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd488d"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd488e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd488f"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4890"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4891"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4886"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 186,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4893"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4894"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4895"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4896"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4897"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4898"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4899"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd489a"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd489b"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd489c"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd489d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4892"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "187",
        "name": "Lê Minh Quyền",
        "cty": "ABC",
        "hotline": "35672242"
      },
      "customer": {
        "customerID": "187",
        "name": "Bùi Minh Quyền",
        "phone": "18043098",
        "address": "Hà Nội",
        "cmnd": "43056962"
      },
      "fileURL": "talk187.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "286s",
      "date": "2/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48c4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48c3"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd48c6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48c5"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48c8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48c7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd48ca"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48c9"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd48cc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48cb"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48ce"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48cd"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd48aa",
    "audioID": 187,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 186,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd48ac"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd48ad"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd48ae"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd48af"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd48b0"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd48b1"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd48b2"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd48b3"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd48b4"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd48b5"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd48b6"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd48ab"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 187,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd48b8"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd48b9"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd48ba"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd48bb"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd48bc"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd48bd"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd48be"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd48bf"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd48c0"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd48c1"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd48c2"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd48b7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "188",
        "name": "Ngô Dương Lợi",
        "cty": "ABC",
        "hotline": "39058511"
      },
      "customer": {
        "customerID": "188",
        "name": "Phan Minh Thái Qúy",
        "phone": "70536566",
        "address": "Hà Nội",
        "cmnd": "33363585"
      },
      "fileURL": "talk188.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "397s",
      "date": "17/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48e9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48e8"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48eb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48ea"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd48ed"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48ec"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48ef"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48ee"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48f1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48f0"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd48f3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd48f2"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd48cf",
    "audioID": 188,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 187,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd48d1"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd48d2"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd48d3"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd48d4"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd48d5"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd48d6"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd48d7"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd48d8"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd48d9"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd48da"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd48db"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd48d0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 188,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd48dd"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd48de"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd48df"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd48e0"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd48e1"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd48e2"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd48e3"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd48e4"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd48e5"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd48e6"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd48e7"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd48dc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "189",
        "name": "Trần Hải Lợi",
        "cty": "ABC",
        "hotline": "59508969"
      },
      "customer": {
        "customerID": "189",
        "name": "Bùi Hữu Quyền",
        "phone": "49274896",
        "address": "Hà Nội",
        "cmnd": "81692513"
      },
      "fileURL": "talk189.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "514s",
      "date": "1/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd490e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd490d"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4910"
            }
          ],
          "_id": "62ebc0df8a312c984bbd490f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4912"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4911"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4914"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4913"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4916"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4915"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4918"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4917"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd48f4",
    "audioID": 189,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 188,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd48f6"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd48f7"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd48f8"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd48f9"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd48fa"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd48fb"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd48fc"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd48fd"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd48fe"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd48ff"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4900"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd48f5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 189,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4902"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4903"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4904"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4905"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4906"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4907"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4908"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4909"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd490a"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd490b"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd490c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4901"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "190",
        "name": "Phan Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "71108989"
      },
      "customer": {
        "customerID": "190",
        "name": "Trần Hải Lợi",
        "phone": "37570246",
        "address": "Hà Nội",
        "cmnd": "90822336"
      },
      "fileURL": "talk190.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "431s",
      "date": "17/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4933"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4932"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4935"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4934"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4937"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4936"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4939"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4938"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd493b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd493a"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd493d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd493c"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4919",
    "audioID": 190,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 189,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd491b"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd491c"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd491d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd491e"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd491f"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4920"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4921"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4922"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4923"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4924"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4925"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd491a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 190,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4927"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4928"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4929"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd492a"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd492b"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd492c"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd492d"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd492e"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd492f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4930"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4931"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4926"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "191",
        "name": "Ngô Hải Dạ",
        "cty": "ABC",
        "hotline": "51434580"
      },
      "customer": {
        "customerID": "191",
        "name": "Ngô Hải Quyền",
        "phone": "36093539",
        "address": "Hà Nội",
        "cmnd": "74818261"
      },
      "fileURL": "talk191.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "232s",
      "date": "5/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4958"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4957"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd495a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4959"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd495c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd495b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd495e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd495d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4960"
            }
          ],
          "_id": "62ebc0df8a312c984bbd495f"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4962"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4961"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd493e",
    "audioID": 191,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 190,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4940"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4941"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4942"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4943"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4944"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4945"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4946"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4947"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4948"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4949"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd494a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd493f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 191,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd494c"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd494d"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd494e"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd494f"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4950"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4951"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4952"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4953"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4954"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4955"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4956"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd494b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "192",
        "name": "Nguyễn Minh Hồng",
        "cty": "ABC",
        "hotline": "80701090"
      },
      "customer": {
        "customerID": "192",
        "name": "Huỳnh An Khánh",
        "phone": "98013560",
        "address": "Hà Nội",
        "cmnd": "28054544"
      },
      "fileURL": "talk192.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "557s",
      "date": "28/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd497d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd497c"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd497f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd497e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4981"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4980"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4983"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4982"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4985"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4984"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4987"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4986"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4963",
    "audioID": 192,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 191,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4965"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4966"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4967"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4968"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4969"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd496a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd496b"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd496c"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd496d"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd496e"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd496f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4964"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 192,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4971"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4972"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4973"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4974"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4975"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4976"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4977"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4978"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4979"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd497a"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd497b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4970"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "193",
        "name": "Phạm Văn Ánh",
        "cty": "ABC",
        "hotline": "20436679"
      },
      "customer": {
        "customerID": "193",
        "name": "Lê An Hồng",
        "phone": "19973536",
        "address": "Hà Nội",
        "cmnd": "89605475"
      },
      "fileURL": "talk193.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "271s",
      "date": "26/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49a2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49a1"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49a4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49a3"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd49a6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49a5"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd49a8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49a7"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd49aa"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49a9"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49ac"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49ab"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4988",
    "audioID": 193,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 192,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd498a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd498b"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd498c"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd498d"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd498e"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd498f"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4990"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4991"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4992"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4993"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4994"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4989"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 193,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4996"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4997"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4998"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4999"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd499a"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd499b"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd499c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd499d"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd499e"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd499f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd49a0"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4995"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "194",
        "name": "Phạm Thị Dạ",
        "cty": "ABC",
        "hotline": "32036796"
      },
      "customer": {
        "customerID": "194",
        "name": "Ngô Văn Cảnh",
        "phone": "84974534",
        "address": "Hà Nội",
        "cmnd": "31543649"
      },
      "fileURL": "talk194.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "387s",
      "date": "31/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49c7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49c6"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49c9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49c8"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49cb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49ca"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49cd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49cc"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49cf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49ce"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49d1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49d0"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd49ad",
    "audioID": 194,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 193,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd49af"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd49b0"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd49b1"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd49b2"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd49b3"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd49b4"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd49b5"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd49b6"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49b7"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd49b8"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49b9"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd49ae"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 194,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd49bb"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd49bc"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd49bd"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd49be"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd49bf"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd49c0"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd49c1"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49c2"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd49c3"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd49c4"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd49c5"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd49ba"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "195",
        "name": "Trần Khánh Thái Qúy",
        "cty": "ABC",
        "hotline": "55018045"
      },
      "customer": {
        "customerID": "195",
        "name": "Đặng Dương Lợi",
        "phone": "95630799",
        "address": "Hà Nội",
        "cmnd": "60538128"
      },
      "fileURL": "talk195.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "544s",
      "date": "8/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49ec"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49eb"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd49ee"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49ed"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49f0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49ef"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd49f2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49f1"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49f4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49f3"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd49f6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd49f5"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd49d2",
    "audioID": 195,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 194,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49d4"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd49d5"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd49d6"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd49d7"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd49d8"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd49d9"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd49da"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd49db"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49dc"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd49dd"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd49de"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd49d3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 195,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49e0"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd49e1"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd49e2"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49e3"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd49e4"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49e5"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd49e6"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd49e7"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49e8"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd49e9"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd49ea"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd49df"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "196",
        "name": "Lê Hữu An",
        "cty": "ABC",
        "hotline": "53425880"
      },
      "customer": {
        "customerID": "196",
        "name": "Lê Minh Cảnh",
        "phone": "25953405",
        "address": "Hà Nội",
        "cmnd": "82165292"
      },
      "fileURL": "talk196.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "495s",
      "date": "10/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a11"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a10"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a13"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a12"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a15"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a14"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a17"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a16"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a19"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a18"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a1b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a1a"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd49f7",
    "audioID": 196,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 195,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49f9"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd49fa"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd49fb"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd49fc"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd49fd"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd49fe"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd49ff"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a00"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a01"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a02"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4a03"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd49f8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 196,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4a05"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4a06"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a07"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4a08"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4a09"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a0a"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4a0b"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a0c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a0d"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4a0e"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4a0f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4a04"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "197",
        "name": "Phan Khánh Khánh",
        "cty": "ABC",
        "hotline": "53835440"
      },
      "customer": {
        "customerID": "197",
        "name": "Trần Minh Lợi",
        "phone": "96258529",
        "address": "Hà Nội",
        "cmnd": "58347182"
      },
      "fileURL": "talk197.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "394s",
      "date": "3/3/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a36"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a35"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a38"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a37"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a3a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a39"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a3c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a3b"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4a3e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a3d"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4a40"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a3f"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4a1c",
    "audioID": 197,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 196,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a1e"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a1f"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a20"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a21"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a22"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4a23"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a24"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4a25"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a26"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4a27"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a28"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4a1d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 197,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a2a"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4a2b"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a2c"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4a2d"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4a2e"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a2f"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a30"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4a31"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a32"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a33"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4a34"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4a29"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "198",
        "name": "Phạm Văn Ánh",
        "cty": "ABC",
        "hotline": "50508663"
      },
      "customer": {
        "customerID": "198",
        "name": "Huỳnh Hữu An",
        "phone": "60877335",
        "address": "Hà Nội",
        "cmnd": "69880198"
      },
      "fileURL": "talk198.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "403s",
      "date": "7/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a5b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a5a"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a5d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a5c"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4a5f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a5e"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a61"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a60"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a63"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a62"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4a65"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a64"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4a41",
    "audioID": 198,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 197,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a43"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4a44"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4a45"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4a46"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a47"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a48"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4a49"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a4a"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4a4b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4a4c"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a4d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4a42"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 198,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a4f"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a50"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4a51"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4a52"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a53"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4a54"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a55"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4a56"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a57"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a58"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a59"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4a4e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "199",
        "name": "Nguyễn Hải An",
        "cty": "ABC",
        "hotline": "67001605"
      },
      "customer": {
        "customerID": "199",
        "name": "Bùi Hải Khánh",
        "phone": "30295063",
        "address": "Hà Nội",
        "cmnd": "19465198"
      },
      "fileURL": "talk199.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "448s",
      "date": "28/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a80"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a7f"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4a82"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a81"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a84"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a83"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a86"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a85"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4a88"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a87"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4a8a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4a89"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4a66",
    "audioID": 199,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 198,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a68"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a69"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a6a"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a6b"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a6c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a6d"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4a6e"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a6f"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a70"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a71"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a72"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4a67"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 199,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a74"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4a75"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a76"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4a77"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a78"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a79"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a7a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4a7b"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4a7c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a7d"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a7e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4a73"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "200",
        "name": "Nguyễn Minh Ánh",
        "cty": "ABC",
        "hotline": "20656490"
      },
      "customer": {
        "customerID": "200",
        "name": "Trương Quốc Hồng",
        "phone": "25117320",
        "address": "Hà Nội",
        "cmnd": "11728883"
      },
      "fileURL": "talk200.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "504s",
      "date": "30/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4aa5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4aa4"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4aa7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4aa6"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4aa9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4aa8"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4aab"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4aaa"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4aad"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4aac"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4aaf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4aae"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4a8b",
    "audioID": 200,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 199,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4a8d"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a8e"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4a8f"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a90"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a91"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a92"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4a93"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4a94"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4a95"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4a96"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4a97"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4a8c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 200,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a99"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4a9a"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4a9b"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4a9c"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4a9d"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4a9e"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4a9f"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4aa0"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4aa1"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4aa2"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4aa3"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4a98"
      }
    ],
    "__v": 0
  }
]
export default FILE2