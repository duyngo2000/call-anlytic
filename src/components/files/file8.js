// 20220804202410
// http://localhost:5000/

const FILE8 =[
  {
    "audioCredit": {
      "agent": {
        "agentID": "701",
        "name": "Huỳnh Quốc Khánh",
        "cty": "ABC",
        "hotline": "27644371"
      },
      "customer": {
        "customerID": "701",
        "name": "Huỳnh Khánh Dạ",
        "phone": "16811058",
        "address": "Hà Nội",
        "cmnd": "11409188"
      },
      "fileURL": "talk701.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "235s",
      "date": "6/11/2022",
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
              "_id": "62ebc0e18a312c984bbd930e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd930d"
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
              "_id": "62ebc0e18a312c984bbd9310"
            }
          ],
          "_id": "62ebc0e18a312c984bbd930f"
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
              "_id": "62ebc0e18a312c984bbd9312"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9311"
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
              "_id": "62ebc0e18a312c984bbd9314"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9313"
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
              "_id": "62ebc0e18a312c984bbd9316"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9315"
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
              "_id": "62ebc0e18a312c984bbd9318"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9317"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd92f4",
    "audioID": 701,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 700,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd92f6"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd92f7"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd92f8"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd92f9"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd92fa"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd92fb"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd92fc"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd92fd"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd92fe"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd92ff"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9300"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd92f5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 701,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9302"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9303"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9304"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9305"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9306"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9307"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9308"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9309"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd930a"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd930b"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd930c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9301"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "702",
        "name": "Ngô Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "69767788"
      },
      "customer": {
        "customerID": "702",
        "name": "Phan Văn Duy",
        "phone": "11978067",
        "address": "Hà Nội",
        "cmnd": "41884972"
      },
      "fileURL": "talk702.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "595s",
      "date": "9/11/2022",
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
              "_id": "62ebc0e18a312c984bbd9333"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9332"
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
              "_id": "62ebc0e18a312c984bbd9335"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9334"
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
              "_id": "62ebc0e18a312c984bbd9337"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9336"
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
              "_id": "62ebc0e18a312c984bbd9339"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9338"
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
              "_id": "62ebc0e18a312c984bbd933b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd933a"
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
              "_id": "62ebc0e18a312c984bbd933d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd933c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9319",
    "audioID": 702,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 701,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd931b"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd931c"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd931d"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd931e"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd931f"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9320"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9321"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9322"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9323"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9324"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9325"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd931a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 702,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9327"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9328"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9329"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd932a"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd932b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd932c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd932d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd932e"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd932f"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9330"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9331"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9326"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "703",
        "name": "Phạm Quốc Dạ",
        "cty": "ABC",
        "hotline": "38890547"
      },
      "customer": {
        "customerID": "703",
        "name": "Nguyễn Phương Khánh",
        "phone": "48583781",
        "address": "Hà Nội",
        "cmnd": "13524306"
      },
      "fileURL": "talk703.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "304s",
      "date": "7/9/2022",
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
              "_id": "62ebc0e18a312c984bbd9358"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9357"
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
              "_id": "62ebc0e18a312c984bbd935a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9359"
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
              "_id": "62ebc0e18a312c984bbd935c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd935b"
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
              "_id": "62ebc0e18a312c984bbd935e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd935d"
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
              "_id": "62ebc0e18a312c984bbd9360"
            }
          ],
          "_id": "62ebc0e18a312c984bbd935f"
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
              "_id": "62ebc0e18a312c984bbd9362"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9361"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd933e",
    "audioID": 703,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 702,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9340"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9341"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9342"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9343"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9344"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9345"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9346"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9347"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9348"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9349"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd934a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd933f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 703,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd934c"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd934d"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd934e"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd934f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9350"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9351"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9352"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9353"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9354"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9355"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9356"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd934b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "704",
        "name": "Phan An Duy",
        "cty": "ABC",
        "hotline": "77051320"
      },
      "customer": {
        "customerID": "704",
        "name": "Trần An An",
        "phone": "73401397",
        "address": "Hà Nội",
        "cmnd": "73298642"
      },
      "fileURL": "talk704.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "540s",
      "date": "13/6/2022",
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
              "_id": "62ebc0e18a312c984bbd937d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd937c"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd937f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd937e"
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
              "_id": "62ebc0e18a312c984bbd9381"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9380"
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
              "_id": "62ebc0e18a312c984bbd9383"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9382"
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
              "_id": "62ebc0e18a312c984bbd9385"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9384"
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
              "_id": "62ebc0e18a312c984bbd9387"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9386"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9363",
    "audioID": 704,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 703,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9365"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9366"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9367"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9368"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9369"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd936a"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd936b"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd936c"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd936d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd936e"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd936f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9364"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 704,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9371"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9372"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9373"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9374"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9375"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9376"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9377"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9378"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9379"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd937a"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd937b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9370"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "705",
        "name": "Phan Văn Khánh",
        "cty": "ABC",
        "hotline": "28386905"
      },
      "customer": {
        "customerID": "705",
        "name": "Ngô Hữu Thái Qúy",
        "phone": "50539555",
        "address": "Hà Nội",
        "cmnd": "69262216"
      },
      "fileURL": "talk705.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "396s",
      "date": "27/9/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd93a2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93a1"
        },
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
              "_id": "62ebc0e18a312c984bbd93a4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93a3"
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
              "_id": "62ebc0e18a312c984bbd93a6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93a5"
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
              "_id": "62ebc0e18a312c984bbd93a8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93a7"
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
              "_id": "62ebc0e18a312c984bbd93aa"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93a9"
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
              "_id": "62ebc0e18a312c984bbd93ac"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93ab"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9388",
    "audioID": 705,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 704,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd938a"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd938b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd938c"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd938d"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd938e"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd938f"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9390"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9391"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9392"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9393"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9394"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9389"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 705,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9396"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9397"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9398"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9399"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd939a"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd939b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd939c"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd939d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd939e"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd939f"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd93a0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9395"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "706",
        "name": "Đặng Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "42695137"
      },
      "customer": {
        "customerID": "706",
        "name": "Phạm Dương Duy",
        "phone": "56302111",
        "address": "Hà Nội",
        "cmnd": "80089873"
      },
      "fileURL": "talk706.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "66s",
      "date": "22/8/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd93c7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93c6"
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
              "_id": "62ebc0e18a312c984bbd93c9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93c8"
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
              "_id": "62ebc0e18a312c984bbd93cb"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93ca"
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
              "_id": "62ebc0e18a312c984bbd93cd"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93cc"
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
              "_id": "62ebc0e18a312c984bbd93cf"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93ce"
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
              "_id": "62ebc0e18a312c984bbd93d1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93d0"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd93ad",
    "audioID": 706,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 705,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd93af"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd93b0"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd93b1"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd93b2"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd93b3"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd93b4"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd93b5"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd93b6"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd93b7"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd93b8"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd93b9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd93ae"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 706,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd93bb"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd93bc"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd93bd"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd93be"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd93bf"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd93c0"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd93c1"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd93c2"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd93c3"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd93c4"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd93c5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd93ba"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "707",
        "name": "Đặng Phương Cảnh",
        "cty": "ABC",
        "hotline": "56085164"
      },
      "customer": {
        "customerID": "707",
        "name": "Huỳnh Minh An",
        "phone": "54545054",
        "address": "Hà Nội",
        "cmnd": "26301516"
      },
      "fileURL": "talk707.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "222s",
      "date": "19/7/2022",
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
              "_id": "62ebc0e18a312c984bbd93ec"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93eb"
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
              "_id": "62ebc0e18a312c984bbd93ee"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93ed"
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
              "_id": "62ebc0e18a312c984bbd93f0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93ef"
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
              "_id": "62ebc0e18a312c984bbd93f2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93f1"
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
              "_id": "62ebc0e18a312c984bbd93f4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93f3"
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
              "_id": "62ebc0e18a312c984bbd93f6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd93f5"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd93d2",
    "audioID": 707,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 706,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd93d4"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd93d5"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd93d6"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd93d7"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd93d8"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd93d9"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd93da"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd93db"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd93dc"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd93dd"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd93de"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd93d3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 707,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd93e0"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd93e1"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd93e2"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd93e3"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd93e4"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd93e5"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd93e6"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd93e7"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd93e8"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd93e9"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd93ea"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd93df"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "708",
        "name": "Ngô Văn Duy",
        "cty": "ABC",
        "hotline": "58865886"
      },
      "customer": {
        "customerID": "708",
        "name": "Phạm Khánh Cảnh",
        "phone": "54050992",
        "address": "Hà Nội",
        "cmnd": "60233083"
      },
      "fileURL": "talk708.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "263s",
      "date": "31/9/2022",
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
              "_id": "62ebc0e18a312c984bbd9411"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9410"
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
              "_id": "62ebc0e18a312c984bbd9413"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9412"
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
              "_id": "62ebc0e18a312c984bbd9415"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9414"
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
              "_id": "62ebc0e18a312c984bbd9417"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9416"
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
              "_id": "62ebc0e18a312c984bbd9419"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9418"
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
              "_id": "62ebc0e18a312c984bbd941b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd941a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd93f7",
    "audioID": 708,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 707,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd93f9"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd93fa"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd93fb"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd93fc"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd93fd"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd93fe"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd93ff"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9400"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9401"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9402"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9403"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd93f8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 708,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9405"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9406"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9407"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9408"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9409"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd940a"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd940b"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd940c"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd940d"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd940e"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd940f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9404"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "709",
        "name": "Trương Quốc Hồng",
        "cty": "ABC",
        "hotline": "50334096"
      },
      "customer": {
        "customerID": "709",
        "name": "Lê Hải Thái Qúy",
        "phone": "36215823",
        "address": "Hà Nội",
        "cmnd": "43844262"
      },
      "fileURL": "talk709.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "26s",
      "date": "12/8/2022",
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
              "_id": "62ebc0e18a312c984bbd9436"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9435"
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
              "_id": "62ebc0e18a312c984bbd9438"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9437"
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
              "_id": "62ebc0e18a312c984bbd943a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9439"
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
              "_id": "62ebc0e18a312c984bbd943c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd943b"
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
              "_id": "62ebc0e18a312c984bbd943e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd943d"
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
              "_id": "62ebc0e18a312c984bbd9440"
            }
          ],
          "_id": "62ebc0e18a312c984bbd943f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd941c",
    "audioID": 709,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 708,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd941e"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd941f"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9420"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9421"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9422"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9423"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9424"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9425"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9426"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9427"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9428"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd941d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 709,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd942a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd942b"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd942c"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd942d"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd942e"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd942f"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9430"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9431"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9432"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9433"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9434"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9429"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "710",
        "name": "Bùi Phương An",
        "cty": "ABC",
        "hotline": "78725713"
      },
      "customer": {
        "customerID": "710",
        "name": "Trương An Thái Qúy",
        "phone": "62671012",
        "address": "Hà Nội",
        "cmnd": "54715890"
      },
      "fileURL": "talk710.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "148s",
      "date": "4/1/2022",
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
              "_id": "62ebc0e18a312c984bbd945b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd945a"
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
              "_id": "62ebc0e18a312c984bbd945d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd945c"
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
              "_id": "62ebc0e18a312c984bbd945f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd945e"
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
              "_id": "62ebc0e18a312c984bbd9461"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9460"
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
              "_id": "62ebc0e18a312c984bbd9463"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9462"
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
              "_id": "62ebc0e18a312c984bbd9465"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9464"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9441",
    "audioID": 710,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 709,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9443"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9444"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9445"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9446"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9447"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9448"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9449"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd944a"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd944b"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd944c"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd944d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9442"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 710,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd944f"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9450"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9451"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9452"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9453"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9454"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9455"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9456"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9457"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9458"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9459"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd944e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "711",
        "name": "Huỳnh Minh Thái Qúy",
        "cty": "ABC",
        "hotline": "20003770"
      },
      "customer": {
        "customerID": "711",
        "name": "Phạm An Ánh",
        "phone": "49752847",
        "address": "Hà Nội",
        "cmnd": "45069579"
      },
      "fileURL": "talk711.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "463s",
      "date": "17/1/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9480"
            }
          ],
          "_id": "62ebc0e18a312c984bbd947f"
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
              "_id": "62ebc0e18a312c984bbd9482"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9481"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9484"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9483"
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
              "_id": "62ebc0e18a312c984bbd9486"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9485"
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
              "_id": "62ebc0e18a312c984bbd9488"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9487"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd948a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9489"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9466",
    "audioID": 711,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 710,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9468"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9469"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd946a"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd946b"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd946c"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd946d"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd946e"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd946f"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9470"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9471"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9472"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9467"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 711,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9474"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9475"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9476"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9477"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9478"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9479"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd947a"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd947b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd947c"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd947d"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd947e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9473"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "712",
        "name": "Huỳnh Quốc Dạ",
        "cty": "ABC",
        "hotline": "95851146"
      },
      "customer": {
        "customerID": "712",
        "name": "Huỳnh Khánh Duy",
        "phone": "16127514",
        "address": "Hà Nội",
        "cmnd": "14550384"
      },
      "fileURL": "talk712.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "325s",
      "date": "15/9/2022",
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
              "_id": "62ebc0e18a312c984bbd94a5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94a4"
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
              "_id": "62ebc0e18a312c984bbd94a7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94a6"
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
              "_id": "62ebc0e18a312c984bbd94a9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94a8"
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
              "_id": "62ebc0e18a312c984bbd94ab"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94aa"
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
              "_id": "62ebc0e18a312c984bbd94ad"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94ac"
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
              "_id": "62ebc0e18a312c984bbd94af"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94ae"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd948b",
    "audioID": 712,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 711,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd948d"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd948e"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd948f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9490"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9491"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9492"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9493"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9494"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9495"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9496"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9497"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd948c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 712,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9499"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd949a"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd949b"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd949c"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd949d"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd949e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd949f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd94a0"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd94a1"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd94a2"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd94a3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9498"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "713",
        "name": "Đặng Thị Cảnh",
        "cty": "ABC",
        "hotline": "17746571"
      },
      "customer": {
        "customerID": "713",
        "name": "Đặng Khánh Cảnh",
        "phone": "99014240",
        "address": "Hà Nội",
        "cmnd": "52645575"
      },
      "fileURL": "talk713.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "348s",
      "date": "7/11/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd94ca"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94c9"
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
              "_id": "62ebc0e18a312c984bbd94cc"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94cb"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd94ce"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94cd"
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
              "_id": "62ebc0e18a312c984bbd94d0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94cf"
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
              "_id": "62ebc0e18a312c984bbd94d2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94d1"
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
              "_id": "62ebc0e18a312c984bbd94d4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94d3"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd94b0",
    "audioID": 713,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 712,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd94b2"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd94b3"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd94b4"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd94b5"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd94b6"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd94b7"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd94b8"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd94b9"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd94ba"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd94bb"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd94bc"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd94b1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 713,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd94be"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd94bf"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd94c0"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd94c1"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd94c2"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd94c3"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd94c4"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd94c5"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd94c6"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd94c7"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd94c8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd94bd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "714",
        "name": "Huỳnh Thị Dạ",
        "cty": "ABC",
        "hotline": "75227844"
      },
      "customer": {
        "customerID": "714",
        "name": "Nguyễn Văn Quyền",
        "phone": "83773937",
        "address": "Hà Nội",
        "cmnd": "61113111"
      },
      "fileURL": "talk714.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "493s",
      "date": "18/9/2022",
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
              "_id": "62ebc0e18a312c984bbd94ef"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94ee"
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
              "_id": "62ebc0e18a312c984bbd94f1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94f0"
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
              "_id": "62ebc0e18a312c984bbd94f3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94f2"
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
              "_id": "62ebc0e18a312c984bbd94f5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94f4"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd94f7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94f6"
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
              "_id": "62ebc0e18a312c984bbd94f9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd94f8"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd94d5",
    "audioID": 714,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 713,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd94d7"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd94d8"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd94d9"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd94da"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd94db"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd94dc"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd94dd"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd94de"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd94df"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd94e0"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd94e1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd94d6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 714,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd94e3"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd94e4"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd94e5"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd94e6"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd94e7"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd94e8"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd94e9"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd94ea"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd94eb"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd94ec"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd94ed"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd94e2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "715",
        "name": "Trương Hải Cảnh",
        "cty": "ABC",
        "hotline": "57529126"
      },
      "customer": {
        "customerID": "715",
        "name": "Huỳnh Hải Quyền",
        "phone": "21801980",
        "address": "Hà Nội",
        "cmnd": "77469460"
      },
      "fileURL": "talk715.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "457s",
      "date": "12/7/2022",
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
              "_id": "62ebc0e18a312c984bbd9514"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9513"
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
              "_id": "62ebc0e18a312c984bbd9516"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9515"
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
              "_id": "62ebc0e18a312c984bbd9518"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9517"
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
              "_id": "62ebc0e18a312c984bbd951a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9519"
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
              "_id": "62ebc0e18a312c984bbd951c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd951b"
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
              "_id": "62ebc0e18a312c984bbd951e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd951d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd94fa",
    "audioID": 715,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 714,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd94fc"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd94fd"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd94fe"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd94ff"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9500"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9501"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9502"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9503"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9504"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9505"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9506"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd94fb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 715,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9508"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9509"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd950a"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd950b"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd950c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd950d"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd950e"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd950f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9510"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9511"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9512"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9507"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "716",
        "name": "Trương Văn Khánh",
        "cty": "ABC",
        "hotline": "85204592"
      },
      "customer": {
        "customerID": "716",
        "name": "Trần Khánh Duy",
        "phone": "17750712",
        "address": "Hà Nội",
        "cmnd": "95849360"
      },
      "fileURL": "talk716.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "165s",
      "date": "31/3/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9539"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9538"
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
              "_id": "62ebc0e18a312c984bbd953b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd953a"
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
              "_id": "62ebc0e18a312c984bbd953d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd953c"
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
              "_id": "62ebc0e18a312c984bbd953f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd953e"
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
              "_id": "62ebc0e18a312c984bbd9541"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9540"
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
              "_id": "62ebc0e18a312c984bbd9543"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9542"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd951f",
    "audioID": 716,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 715,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9521"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9522"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9523"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9524"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9525"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9526"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9527"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9528"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9529"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd952a"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd952b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9520"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 716,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd952d"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd952e"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd952f"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9530"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9531"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9532"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9533"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9534"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9535"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9536"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9537"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd952c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "717",
        "name": "Trần An An",
        "cty": "ABC",
        "hotline": "57217368"
      },
      "customer": {
        "customerID": "717",
        "name": "Huỳnh Văn Khánh",
        "phone": "74249295",
        "address": "Hà Nội",
        "cmnd": "83675227"
      },
      "fileURL": "talk717.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "93s",
      "date": "24/1/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd955e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd955d"
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
              "_id": "62ebc0e18a312c984bbd9560"
            }
          ],
          "_id": "62ebc0e18a312c984bbd955f"
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
              "_id": "62ebc0e18a312c984bbd9562"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9561"
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
              "_id": "62ebc0e18a312c984bbd9564"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9563"
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
              "_id": "62ebc0e18a312c984bbd9566"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9565"
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
              "_id": "62ebc0e18a312c984bbd9568"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9567"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9544",
    "audioID": 717,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 716,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9546"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9547"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9548"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9549"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd954a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd954b"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd954c"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd954d"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd954e"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd954f"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9550"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9545"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 717,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9552"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9553"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9554"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9555"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9556"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9557"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9558"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9559"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd955a"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd955b"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd955c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9551"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "718",
        "name": "Phan Phương Khánh",
        "cty": "ABC",
        "hotline": "53997038"
      },
      "customer": {
        "customerID": "718",
        "name": "Ngô Minh Thái Qúy",
        "phone": "78440943",
        "address": "Hà Nội",
        "cmnd": "73122566"
      },
      "fileURL": "talk718.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "69s",
      "date": "9/11/2022",
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
              "_id": "62ebc0e18a312c984bbd9583"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9582"
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
              "_id": "62ebc0e18a312c984bbd9585"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9584"
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
              "_id": "62ebc0e18a312c984bbd9587"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9586"
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
              "_id": "62ebc0e18a312c984bbd9589"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9588"
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
              "_id": "62ebc0e18a312c984bbd958b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd958a"
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
              "_id": "62ebc0e18a312c984bbd958d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd958c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9569",
    "audioID": 718,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 717,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd956b"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd956c"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd956d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd956e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd956f"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9570"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9571"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9572"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9573"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9574"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9575"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd956a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 718,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9577"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9578"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9579"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd957a"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd957b"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd957c"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd957d"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd957e"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd957f"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9580"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9581"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9576"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "719",
        "name": "Đặng Văn Lợi",
        "cty": "ABC",
        "hotline": "57590383"
      },
      "customer": {
        "customerID": "719",
        "name": "Phan Dương Dạ",
        "phone": "11301830",
        "address": "Hà Nội",
        "cmnd": "14725848"
      },
      "fileURL": "talk719.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "248s",
      "date": "16/3/2022",
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
              "_id": "62ebc0e18a312c984bbd95a8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95a7"
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
              "_id": "62ebc0e18a312c984bbd95aa"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95a9"
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
              "_id": "62ebc0e18a312c984bbd95ac"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95ab"
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
              "_id": "62ebc0e18a312c984bbd95ae"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95ad"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd95b0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95af"
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
              "_id": "62ebc0e18a312c984bbd95b2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95b1"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd958e",
    "audioID": 719,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 718,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9590"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9591"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9592"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9593"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9594"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9595"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9596"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9597"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9598"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9599"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd959a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd958f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 719,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd959c"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd959d"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd959e"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd959f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd95a0"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd95a1"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd95a2"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd95a3"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd95a4"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd95a5"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd95a6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd959b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "720",
        "name": "Ngô Minh Thái Qúy",
        "cty": "ABC",
        "hotline": "47365666"
      },
      "customer": {
        "customerID": "720",
        "name": "Phạm Phương Dạ",
        "phone": "46561991",
        "address": "Hà Nội",
        "cmnd": "91385553"
      },
      "fileURL": "talk720.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "263s",
      "date": "18/10/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd95cd"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95cc"
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
              "_id": "62ebc0e18a312c984bbd95cf"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95ce"
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
              "_id": "62ebc0e18a312c984bbd95d1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95d0"
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
              "_id": "62ebc0e18a312c984bbd95d3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95d2"
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
              "_id": "62ebc0e18a312c984bbd95d5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95d4"
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
              "_id": "62ebc0e18a312c984bbd95d7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95d6"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd95b3",
    "audioID": 720,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 719,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd95b5"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd95b6"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd95b7"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd95b8"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd95b9"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd95ba"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd95bb"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd95bc"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd95bd"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd95be"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd95bf"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd95b4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 720,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd95c1"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd95c2"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd95c3"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd95c4"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd95c5"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd95c6"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd95c7"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd95c8"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd95c9"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd95ca"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd95cb"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd95c0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "721",
        "name": "Bùi Thị Ánh",
        "cty": "ABC",
        "hotline": "91206771"
      },
      "customer": {
        "customerID": "721",
        "name": "Bùi Thị Dạ",
        "phone": "72365606",
        "address": "Hà Nội",
        "cmnd": "39188753"
      },
      "fileURL": "talk721.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "26s",
      "date": "7/5/2022",
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
              "_id": "62ebc0e18a312c984bbd95f2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95f1"
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
              "_id": "62ebc0e18a312c984bbd95f4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95f3"
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
              "_id": "62ebc0e18a312c984bbd95f6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95f5"
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
              "_id": "62ebc0e18a312c984bbd95f8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95f7"
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
              "_id": "62ebc0e18a312c984bbd95fa"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95f9"
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
              "_id": "62ebc0e18a312c984bbd95fc"
            }
          ],
          "_id": "62ebc0e18a312c984bbd95fb"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd95d8",
    "audioID": 721,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 720,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd95da"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd95db"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd95dc"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd95dd"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd95de"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd95df"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd95e0"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd95e1"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd95e2"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd95e3"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd95e4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd95d9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 721,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd95e6"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd95e7"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd95e8"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd95e9"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd95ea"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd95eb"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd95ec"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd95ed"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd95ee"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd95ef"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd95f0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd95e5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "722",
        "name": "Ngô Hải Quyền",
        "cty": "ABC",
        "hotline": "50597014"
      },
      "customer": {
        "customerID": "722",
        "name": "Phan Khánh Duy",
        "phone": "12259179",
        "address": "Hà Nội",
        "cmnd": "50032504"
      },
      "fileURL": "talk722.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "257s",
      "date": "31/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbd9617"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9616"
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
              "_id": "62ebc0e18a312c984bbd9619"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9618"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd961b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd961a"
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
              "_id": "62ebc0e18a312c984bbd961d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd961c"
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
              "_id": "62ebc0e18a312c984bbd961f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd961e"
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
              "_id": "62ebc0e18a312c984bbd9621"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9620"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd95fd",
    "audioID": 722,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 721,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd95ff"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9600"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9601"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9602"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9603"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9604"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9605"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9606"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9607"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9608"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9609"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd95fe"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 722,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd960b"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd960c"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd960d"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd960e"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd960f"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9610"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9611"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9612"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9613"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9614"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9615"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd960a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "723",
        "name": "Trần Phương Quyền",
        "cty": "ABC",
        "hotline": "77028002"
      },
      "customer": {
        "customerID": "723",
        "name": "Lê Khánh Khánh",
        "phone": "74355621",
        "address": "Hà Nội",
        "cmnd": "93122965"
      },
      "fileURL": "talk723.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "515s",
      "date": "8/10/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd963c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd963b"
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
              "_id": "62ebc0e18a312c984bbd963e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd963d"
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
              "_id": "62ebc0e18a312c984bbd9640"
            }
          ],
          "_id": "62ebc0e18a312c984bbd963f"
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
              "_id": "62ebc0e18a312c984bbd9642"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9641"
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
              "_id": "62ebc0e18a312c984bbd9644"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9643"
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
              "_id": "62ebc0e18a312c984bbd9646"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9645"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9622",
    "audioID": 723,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 722,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9624"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9625"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9626"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9627"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9628"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9629"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd962a"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd962b"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd962c"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd962d"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd962e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9623"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 723,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9630"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9631"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9632"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9633"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9634"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9635"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9636"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9637"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9638"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9639"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd963a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd962f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "724",
        "name": "Bùi Văn Khánh",
        "cty": "ABC",
        "hotline": "85754329"
      },
      "customer": {
        "customerID": "724",
        "name": "Lê Dương Dạ",
        "phone": "67219864",
        "address": "Hà Nội",
        "cmnd": "97013753"
      },
      "fileURL": "talk724.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "209s",
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
              "_id": "62ebc0e18a312c984bbd9661"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9660"
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
              "_id": "62ebc0e18a312c984bbd9663"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9662"
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
              "_id": "62ebc0e18a312c984bbd9665"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9664"
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
              "_id": "62ebc0e18a312c984bbd9667"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9666"
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
              "_id": "62ebc0e18a312c984bbd9669"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9668"
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
              "_id": "62ebc0e18a312c984bbd966b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd966a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9647",
    "audioID": 724,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 723,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9649"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd964a"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd964b"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd964c"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd964d"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd964e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd964f"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9650"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9651"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9652"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9653"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9648"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 724,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9655"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9656"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9657"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9658"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9659"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd965a"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd965b"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd965c"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd965d"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd965e"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd965f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9654"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "725",
        "name": "Nguyễn Văn Khánh",
        "cty": "ABC",
        "hotline": "90699841"
      },
      "customer": {
        "customerID": "725",
        "name": "Trần Hữu Hồng",
        "phone": "55737012",
        "address": "Hà Nội",
        "cmnd": "85402147"
      },
      "fileURL": "talk725.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "128s",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9686"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9685"
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
              "_id": "62ebc0e18a312c984bbd9688"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9687"
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
              "_id": "62ebc0e18a312c984bbd968a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9689"
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
              "_id": "62ebc0e18a312c984bbd968c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd968b"
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
              "_id": "62ebc0e18a312c984bbd968e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd968d"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9690"
            }
          ],
          "_id": "62ebc0e18a312c984bbd968f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd966c",
    "audioID": 725,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 724,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd966e"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd966f"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9670"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9671"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9672"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9673"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9674"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9675"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9676"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9677"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9678"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd966d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 725,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd967a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd967b"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd967c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd967d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd967e"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd967f"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9680"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9681"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9682"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9683"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9684"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9679"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "726",
        "name": "Bùi Quốc Lợi",
        "cty": "ABC",
        "hotline": "34226878"
      },
      "customer": {
        "customerID": "726",
        "name": "Lê Dương Lợi",
        "phone": "82998582",
        "address": "Hà Nội",
        "cmnd": "88562152"
      },
      "fileURL": "talk726.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "141s",
      "date": "21/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbd96ab"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96aa"
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
              "_id": "62ebc0e18a312c984bbd96ad"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96ac"
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
              "_id": "62ebc0e18a312c984bbd96af"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96ae"
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
              "_id": "62ebc0e18a312c984bbd96b1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96b0"
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
              "_id": "62ebc0e18a312c984bbd96b3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96b2"
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
              "_id": "62ebc0e18a312c984bbd96b5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96b4"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9691",
    "audioID": 726,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 725,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9693"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9694"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9695"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9696"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9697"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9698"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9699"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd969a"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd969b"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd969c"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd969d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9692"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 726,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd969f"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd96a0"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd96a1"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd96a2"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd96a3"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd96a4"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd96a5"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd96a6"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd96a7"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd96a8"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd96a9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd969e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "727",
        "name": "Ngô Hữu Khánh",
        "cty": "ABC",
        "hotline": "11314095"
      },
      "customer": {
        "customerID": "727",
        "name": "Đặng Dương Duy",
        "phone": "96575727",
        "address": "Hà Nội",
        "cmnd": "68518544"
      },
      "fileURL": "talk727.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "83s",
      "date": "4/4/2022",
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
              "_id": "62ebc0e18a312c984bbd96d0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96cf"
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
              "_id": "62ebc0e18a312c984bbd96d2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96d1"
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
              "_id": "62ebc0e18a312c984bbd96d4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96d3"
        },
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
              "_id": "62ebc0e18a312c984bbd96d6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96d5"
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
              "_id": "62ebc0e18a312c984bbd96d8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96d7"
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
              "_id": "62ebc0e18a312c984bbd96da"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96d9"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd96b6",
    "audioID": 727,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 726,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd96b8"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd96b9"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd96ba"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd96bb"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd96bc"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd96bd"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd96be"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd96bf"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd96c0"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd96c1"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd96c2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd96b7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 727,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd96c4"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd96c5"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd96c6"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd96c7"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd96c8"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd96c9"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd96ca"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd96cb"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd96cc"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd96cd"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd96ce"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd96c3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "728",
        "name": "Phan Hữu Lợi",
        "cty": "ABC",
        "hotline": "12104543"
      },
      "customer": {
        "customerID": "728",
        "name": "Đặng Phương Quyền",
        "phone": "55025196",
        "address": "Hà Nội",
        "cmnd": "55908839"
      },
      "fileURL": "talk728.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "540s",
      "date": "24/8/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd96f5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96f4"
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
              "_id": "62ebc0e18a312c984bbd96f7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96f6"
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
              "_id": "62ebc0e18a312c984bbd96f9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96f8"
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
              "_id": "62ebc0e18a312c984bbd96fb"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96fa"
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
              "_id": "62ebc0e18a312c984bbd96fd"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96fc"
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
              "_id": "62ebc0e18a312c984bbd96ff"
            }
          ],
          "_id": "62ebc0e18a312c984bbd96fe"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd96db",
    "audioID": 728,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 727,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd96dd"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd96de"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd96df"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd96e0"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd96e1"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd96e2"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd96e3"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd96e4"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd96e5"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd96e6"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd96e7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd96dc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 728,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd96e9"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd96ea"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd96eb"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd96ec"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd96ed"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd96ee"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd96ef"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd96f0"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd96f1"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd96f2"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd96f3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd96e8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "729",
        "name": "Trương Hải Duy",
        "cty": "ABC",
        "hotline": "35867134"
      },
      "customer": {
        "customerID": "729",
        "name": "Bùi Thị Duy",
        "phone": "50539028",
        "address": "Hà Nội",
        "cmnd": "78613332"
      },
      "fileURL": "talk729.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "100s",
      "date": "4/9/2022",
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
              "_id": "62ebc0e18a312c984bbd971a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9719"
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
              "_id": "62ebc0e18a312c984bbd971c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd971b"
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
              "_id": "62ebc0e18a312c984bbd971e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd971d"
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
              "_id": "62ebc0e18a312c984bbd9720"
            }
          ],
          "_id": "62ebc0e18a312c984bbd971f"
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
              "_id": "62ebc0e18a312c984bbd9722"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9721"
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
              "_id": "62ebc0e18a312c984bbd9724"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9723"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9700",
    "audioID": 729,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 728,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9702"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9703"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9704"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9705"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9706"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9707"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9708"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9709"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd970a"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd970b"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd970c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9701"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 729,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd970e"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd970f"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9710"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9711"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9712"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9713"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9714"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9715"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9716"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9717"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9718"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd970d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "730",
        "name": "Phạm Hữu Ánh",
        "cty": "ABC",
        "hotline": "86999221"
      },
      "customer": {
        "customerID": "730",
        "name": "Đặng Thị Quyền",
        "phone": "57767407",
        "address": "Hà Nội",
        "cmnd": "42031547"
      },
      "fileURL": "talk730.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "20s",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd973f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd973e"
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
              "_id": "62ebc0e18a312c984bbd9741"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9740"
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
              "_id": "62ebc0e18a312c984bbd9743"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9742"
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
              "_id": "62ebc0e18a312c984bbd9745"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9744"
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
              "_id": "62ebc0e18a312c984bbd9747"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9746"
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
              "_id": "62ebc0e18a312c984bbd9749"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9748"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9725",
    "audioID": 730,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 729,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9727"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9728"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9729"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd972a"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd972b"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd972c"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd972d"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd972e"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd972f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9730"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9731"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9726"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 730,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9733"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9734"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9735"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9736"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9737"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9738"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9739"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd973a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd973b"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd973c"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd973d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9732"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "731",
        "name": "Trương Phương Hồng",
        "cty": "ABC",
        "hotline": "67287900"
      },
      "customer": {
        "customerID": "731",
        "name": "Bùi Hữu An",
        "phone": "28371487",
        "address": "Hà Nội",
        "cmnd": "69371980"
      },
      "fileURL": "talk731.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "548s",
      "date": "27/12/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9764"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9763"
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
              "_id": "62ebc0e18a312c984bbd9766"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9765"
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
              "_id": "62ebc0e18a312c984bbd9768"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9767"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd976a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9769"
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
              "_id": "62ebc0e18a312c984bbd976c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd976b"
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
              "_id": "62ebc0e18a312c984bbd976e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd976d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd974a",
    "audioID": 731,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 730,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd974c"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd974d"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd974e"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd974f"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9750"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9751"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9752"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9753"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9754"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9755"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9756"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd974b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 731,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9758"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9759"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd975a"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd975b"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd975c"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd975d"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd975e"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd975f"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9760"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9761"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9762"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9757"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "732",
        "name": "Phạm Minh Dạ",
        "cty": "ABC",
        "hotline": "81914008"
      },
      "customer": {
        "customerID": "732",
        "name": "Nguyễn Thị Cảnh",
        "phone": "23612280",
        "address": "Hà Nội",
        "cmnd": "58084363"
      },
      "fileURL": "talk732.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "62s",
      "date": "26/5/2022",
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
              "_id": "62ebc0e18a312c984bbd9789"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9788"
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
              "_id": "62ebc0e18a312c984bbd978b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd978a"
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
              "_id": "62ebc0e18a312c984bbd978d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd978c"
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
              "_id": "62ebc0e18a312c984bbd978f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd978e"
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
              "_id": "62ebc0e18a312c984bbd9791"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9790"
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
              "_id": "62ebc0e18a312c984bbd9793"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9792"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd976f",
    "audioID": 732,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 731,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9771"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9772"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9773"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9774"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9775"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9776"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9777"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9778"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9779"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd977a"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd977b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9770"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 732,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd977d"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd977e"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd977f"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9780"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9781"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9782"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9783"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9784"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9785"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9786"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9787"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd977c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "733",
        "name": "Phan An Cảnh",
        "cty": "ABC",
        "hotline": "62017580"
      },
      "customer": {
        "customerID": "733",
        "name": "Lê Dương Cảnh",
        "phone": "59038580",
        "address": "Hà Nội",
        "cmnd": "69287580"
      },
      "fileURL": "talk733.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "549s",
      "date": "21/10/2022",
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
              "_id": "62ebc0e18a312c984bbd97ae"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97ad"
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
              "_id": "62ebc0e18a312c984bbd97b0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97af"
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
              "_id": "62ebc0e18a312c984bbd97b2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97b1"
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
              "_id": "62ebc0e18a312c984bbd97b4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97b3"
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
              "_id": "62ebc0e18a312c984bbd97b6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97b5"
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
              "_id": "62ebc0e18a312c984bbd97b8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97b7"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9794",
    "audioID": 733,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 732,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9796"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9797"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9798"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9799"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd979a"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd979b"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd979c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd979d"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd979e"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd979f"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97a0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9795"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 733,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd97a2"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97a3"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd97a4"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97a5"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd97a6"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd97a7"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd97a8"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97a9"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd97aa"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd97ab"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd97ac"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd97a1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "734",
        "name": "Ngô Hải Lợi",
        "cty": "ABC",
        "hotline": "84124667"
      },
      "customer": {
        "customerID": "734",
        "name": "Bùi Thị Hồng",
        "phone": "57132117",
        "address": "Hà Nội",
        "cmnd": "86541002"
      },
      "fileURL": "talk734.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "273s",
      "date": "12/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbd97d3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97d2"
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
              "_id": "62ebc0e18a312c984bbd97d5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97d4"
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
              "_id": "62ebc0e18a312c984bbd97d7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97d6"
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
              "_id": "62ebc0e18a312c984bbd97d9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97d8"
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
              "_id": "62ebc0e18a312c984bbd97db"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97da"
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
              "_id": "62ebc0e18a312c984bbd97dd"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97dc"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd97b9",
    "audioID": 734,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 733,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd97bb"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd97bc"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd97bd"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd97be"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd97bf"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97c0"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd97c1"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd97c2"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97c3"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd97c4"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd97c5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd97ba"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 734,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd97c7"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd97c8"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd97c9"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd97ca"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd97cb"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd97cc"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd97cd"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd97ce"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd97cf"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd97d0"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd97d1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd97c6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "735",
        "name": "Phan Phương Dạ",
        "cty": "ABC",
        "hotline": "65720890"
      },
      "customer": {
        "customerID": "735",
        "name": "Đặng Văn Cảnh",
        "phone": "35655787",
        "address": "Hà Nội",
        "cmnd": "60772240"
      },
      "fileURL": "talk735.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "85s",
      "date": "7/5/2022",
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
              "_id": "62ebc0e18a312c984bbd97f8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97f7"
        },
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
              "_id": "62ebc0e18a312c984bbd97fa"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97f9"
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
              "_id": "62ebc0e18a312c984bbd97fc"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97fb"
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
              "_id": "62ebc0e18a312c984bbd97fe"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97fd"
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
              "_id": "62ebc0e18a312c984bbd9800"
            }
          ],
          "_id": "62ebc0e18a312c984bbd97ff"
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
              "_id": "62ebc0e18a312c984bbd9802"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9801"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd97de",
    "audioID": 735,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 734,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd97e0"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd97e1"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97e2"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd97e3"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97e4"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd97e5"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd97e6"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd97e7"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97e8"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd97e9"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd97ea"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd97df"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 735,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd97ec"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd97ed"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd97ee"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd97ef"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd97f0"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd97f1"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd97f2"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd97f3"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd97f4"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd97f5"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd97f6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd97eb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "736",
        "name": "Ngô Dương Ánh",
        "cty": "ABC",
        "hotline": "32733376"
      },
      "customer": {
        "customerID": "736",
        "name": "Trương Quốc An",
        "phone": "47568494",
        "address": "Hà Nội",
        "cmnd": "14538045"
      },
      "fileURL": "talk736.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "191s",
      "date": "28/3/2022",
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
              "_id": "62ebc0e18a312c984bbd981d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd981c"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd981f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd981e"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9821"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9820"
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
              "_id": "62ebc0e18a312c984bbd9823"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9822"
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
              "_id": "62ebc0e18a312c984bbd9825"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9824"
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
              "_id": "62ebc0e18a312c984bbd9827"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9826"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9803",
    "audioID": 736,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 735,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9805"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9806"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9807"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9808"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9809"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd980a"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd980b"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd980c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd980d"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd980e"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd980f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9804"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 736,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9811"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9812"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9813"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9814"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9815"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9816"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9817"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9818"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9819"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd981a"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd981b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9810"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "737",
        "name": "Đặng Hữu Duy",
        "cty": "ABC",
        "hotline": "80669635"
      },
      "customer": {
        "customerID": "737",
        "name": "Nguyễn Phương Hồng",
        "phone": "20582889",
        "address": "Hà Nội",
        "cmnd": "93094289"
      },
      "fileURL": "talk737.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "563s",
      "date": "5/8/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9842"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9841"
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
              "_id": "62ebc0e18a312c984bbd9844"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9843"
        },
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
              "_id": "62ebc0e18a312c984bbd9846"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9845"
        },
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
              "_id": "62ebc0e18a312c984bbd9848"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9847"
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
              "_id": "62ebc0e18a312c984bbd984a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9849"
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
              "_id": "62ebc0e18a312c984bbd984c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd984b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9828",
    "audioID": 737,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 736,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd982a"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd982b"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd982c"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd982d"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd982e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd982f"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9830"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9831"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9832"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9833"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9834"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9829"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 737,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9836"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9837"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9838"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9839"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd983a"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd983b"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd983c"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd983d"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd983e"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd983f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9840"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9835"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "738",
        "name": "Trần Phương Lợi",
        "cty": "ABC",
        "hotline": "95647627"
      },
      "customer": {
        "customerID": "738",
        "name": "Phạm Khánh Dạ",
        "phone": "24611897",
        "address": "Hà Nội",
        "cmnd": "50037202"
      },
      "fileURL": "talk738.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "365s",
      "date": "22/2/2022",
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
              "_id": "62ebc0e18a312c984bbd9867"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9866"
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
              "_id": "62ebc0e18a312c984bbd9869"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9868"
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
              "_id": "62ebc0e18a312c984bbd986b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd986a"
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
              "_id": "62ebc0e18a312c984bbd986d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd986c"
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
              "_id": "62ebc0e18a312c984bbd986f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd986e"
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
              "_id": "62ebc0e18a312c984bbd9871"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9870"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd984d",
    "audioID": 738,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 737,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd984f"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9850"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9851"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9852"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9853"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9854"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9855"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9856"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9857"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9858"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9859"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd984e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 738,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd985b"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd985c"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd985d"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd985e"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd985f"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9860"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9861"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9862"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9863"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9864"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9865"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd985a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "739",
        "name": "Bùi Phương Dạ",
        "cty": "ABC",
        "hotline": "73601304"
      },
      "customer": {
        "customerID": "739",
        "name": "Trần Hữu Dạ",
        "phone": "68549882",
        "address": "Hà Nội",
        "cmnd": "71480477"
      },
      "fileURL": "talk739.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "354s",
      "date": "15/4/2022",
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
              "_id": "62ebc0e18a312c984bbd988c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd988b"
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
              "_id": "62ebc0e18a312c984bbd988e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd988d"
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
              "_id": "62ebc0e18a312c984bbd9890"
            }
          ],
          "_id": "62ebc0e18a312c984bbd988f"
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
              "_id": "62ebc0e18a312c984bbd9892"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9891"
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
              "_id": "62ebc0e18a312c984bbd9894"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9893"
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
              "_id": "62ebc0e18a312c984bbd9896"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9895"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9872",
    "audioID": 739,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 738,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9874"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9875"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9876"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9877"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9878"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9879"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd987a"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd987b"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd987c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd987d"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd987e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9873"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 739,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9880"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9881"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9882"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9883"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9884"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9885"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9886"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9887"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9888"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9889"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd988a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd987f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "740",
        "name": "Lê Minh Cảnh",
        "cty": "ABC",
        "hotline": "35385598"
      },
      "customer": {
        "customerID": "740",
        "name": "Trương Văn Dạ",
        "phone": "54483409",
        "address": "Hà Nội",
        "cmnd": "31195090"
      },
      "fileURL": "talk740.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "519s",
      "date": "23/5/2022",
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
              "_id": "62ebc0e18a312c984bbd98b1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98b0"
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
              "_id": "62ebc0e18a312c984bbd98b3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98b2"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd98b5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98b4"
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
              "_id": "62ebc0e18a312c984bbd98b7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98b6"
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
              "_id": "62ebc0e18a312c984bbd98b9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98b8"
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
              "_id": "62ebc0e18a312c984bbd98bb"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98ba"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9897",
    "audioID": 740,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 739,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9899"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd989a"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd989b"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd989c"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd989d"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd989e"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd989f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd98a0"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd98a1"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98a2"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd98a3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9898"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 740,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd98a5"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd98a6"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98a7"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd98a8"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd98a9"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd98aa"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd98ab"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd98ac"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd98ad"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd98ae"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd98af"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd98a4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "741",
        "name": "Nguyễn Dương Thái Qúy",
        "cty": "ABC",
        "hotline": "12474105"
      },
      "customer": {
        "customerID": "741",
        "name": "Phạm Hữu Quyền",
        "phone": "15343086",
        "address": "Hà Nội",
        "cmnd": "88996526"
      },
      "fileURL": "talk741.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "118s",
      "date": "6/11/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd98d6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98d5"
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
              "_id": "62ebc0e18a312c984bbd98d8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98d7"
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
              "_id": "62ebc0e18a312c984bbd98da"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98d9"
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
              "_id": "62ebc0e18a312c984bbd98dc"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98db"
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
              "_id": "62ebc0e18a312c984bbd98de"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98dd"
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
              "_id": "62ebc0e18a312c984bbd98e0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98df"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd98bc",
    "audioID": 741,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 740,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd98be"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd98bf"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd98c0"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd98c1"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd98c2"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd98c3"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd98c4"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd98c5"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98c6"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd98c7"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd98c8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd98bd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 741,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd98ca"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd98cb"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd98cc"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98cd"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd98ce"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd98cf"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd98d0"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd98d1"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98d2"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd98d3"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd98d4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd98c9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "742",
        "name": "Đặng An An",
        "cty": "ABC",
        "hotline": "91731037"
      },
      "customer": {
        "customerID": "742",
        "name": "Nguyễn An Duy",
        "phone": "48631902",
        "address": "Hà Nội",
        "cmnd": "85108280"
      },
      "fileURL": "talk742.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "194s",
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
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd98fb"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98fa"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd98fd"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98fc"
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
              "_id": "62ebc0e18a312c984bbd98ff"
            }
          ],
          "_id": "62ebc0e18a312c984bbd98fe"
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
              "_id": "62ebc0e18a312c984bbd9901"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9900"
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
              "_id": "62ebc0e18a312c984bbd9903"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9902"
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
              "_id": "62ebc0e18a312c984bbd9905"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9904"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd98e1",
    "audioID": 742,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 741,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd98e3"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd98e4"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98e5"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd98e6"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98e7"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd98e8"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd98e9"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd98ea"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd98eb"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd98ec"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd98ed"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd98e2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 742,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98ef"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd98f0"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd98f1"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd98f2"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98f3"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd98f4"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd98f5"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd98f6"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd98f7"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd98f8"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd98f9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd98ee"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "743",
        "name": "Ngô Minh Hồng",
        "cty": "ABC",
        "hotline": "78185777"
      },
      "customer": {
        "customerID": "743",
        "name": "Phan Văn Ánh",
        "phone": "57540565",
        "address": "Hà Nội",
        "cmnd": "69850112"
      },
      "fileURL": "talk743.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "143s",
      "date": "10/5/2022",
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
              "_id": "62ebc0e18a312c984bbd9920"
            }
          ],
          "_id": "62ebc0e18a312c984bbd991f"
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
              "_id": "62ebc0e18a312c984bbd9922"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9921"
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
              "_id": "62ebc0e18a312c984bbd9924"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9923"
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
              "_id": "62ebc0e18a312c984bbd9926"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9925"
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
              "_id": "62ebc0e18a312c984bbd9928"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9927"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd992a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9929"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9906",
    "audioID": 743,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 742,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9908"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9909"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd990a"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd990b"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd990c"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd990d"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd990e"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd990f"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9910"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9911"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9912"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9907"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 743,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9914"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9915"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9916"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9917"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9918"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9919"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd991a"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd991b"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd991c"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd991d"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd991e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9913"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "744",
        "name": "Đặng Quốc Khánh",
        "cty": "ABC",
        "hotline": "28194944"
      },
      "customer": {
        "customerID": "744",
        "name": "Nguyễn Văn Thái Qúy",
        "phone": "97572895",
        "address": "Hà Nội",
        "cmnd": "19479583"
      },
      "fileURL": "talk744.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "279s",
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
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9945"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9944"
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
              "_id": "62ebc0e18a312c984bbd9947"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9946"
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
              "_id": "62ebc0e18a312c984bbd9949"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9948"
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
              "_id": "62ebc0e18a312c984bbd994b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd994a"
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
              "_id": "62ebc0e18a312c984bbd994d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd994c"
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
              "_id": "62ebc0e18a312c984bbd994f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd994e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd992b",
    "audioID": 744,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 743,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd992d"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd992e"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd992f"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9930"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9931"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9932"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9933"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9934"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9935"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9936"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9937"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd992c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 744,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9939"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd993a"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd993b"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd993c"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd993d"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd993e"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd993f"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9940"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9941"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9942"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9943"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9938"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "745",
        "name": "Huỳnh Dương Thái Qúy",
        "cty": "ABC",
        "hotline": "97892099"
      },
      "customer": {
        "customerID": "745",
        "name": "Phạm Văn Khánh",
        "phone": "27544196",
        "address": "Hà Nội",
        "cmnd": "34932196"
      },
      "fileURL": "talk745.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "333s",
      "date": "31/1/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd996a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9969"
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
              "_id": "62ebc0e18a312c984bbd996c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd996b"
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
              "_id": "62ebc0e18a312c984bbd996e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd996d"
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
              "_id": "62ebc0e18a312c984bbd9970"
            }
          ],
          "_id": "62ebc0e18a312c984bbd996f"
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
              "_id": "62ebc0e18a312c984bbd9972"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9971"
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
              "_id": "62ebc0e18a312c984bbd9974"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9973"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9950",
    "audioID": 745,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 744,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9952"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9953"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9954"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9955"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9956"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9957"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9958"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9959"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd995a"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd995b"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd995c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9951"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 745,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd995e"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd995f"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9960"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9961"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9962"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9963"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9964"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9965"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9966"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9967"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9968"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd995d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "746",
        "name": "Trần Minh Khánh",
        "cty": "ABC",
        "hotline": "37019716"
      },
      "customer": {
        "customerID": "746",
        "name": "Đặng Dương Khánh",
        "phone": "28011783",
        "address": "Hà Nội",
        "cmnd": "73855101"
      },
      "fileURL": "talk746.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "595s",
      "date": "19/1/2022",
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
              "_id": "62ebc0e18a312c984bbd998f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd998e"
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
              "_id": "62ebc0e18a312c984bbd9991"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9990"
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
              "_id": "62ebc0e18a312c984bbd9993"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9992"
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
              "_id": "62ebc0e18a312c984bbd9995"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9994"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9997"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9996"
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
              "_id": "62ebc0e18a312c984bbd9999"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9998"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9975",
    "audioID": 746,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 745,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9977"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9978"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9979"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd997a"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd997b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd997c"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd997d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd997e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd997f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9980"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9981"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9976"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 746,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9983"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9984"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9985"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9986"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9987"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9988"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9989"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd998a"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd998b"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd998c"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd998d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9982"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "747",
        "name": "Ngô Hải Lợi",
        "cty": "ABC",
        "hotline": "45589935"
      },
      "customer": {
        "customerID": "747",
        "name": "Phan An Duy",
        "phone": "54710094",
        "address": "Hà Nội",
        "cmnd": "32828556"
      },
      "fileURL": "talk747.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "34s",
      "date": "24/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd99b4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99b3"
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
              "_id": "62ebc0e18a312c984bbd99b6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99b5"
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
              "_id": "62ebc0e18a312c984bbd99b8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99b7"
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
              "_id": "62ebc0e18a312c984bbd99ba"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99b9"
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
              "_id": "62ebc0e18a312c984bbd99bc"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99bb"
        },
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
              "_id": "62ebc0e18a312c984bbd99be"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99bd"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd999a",
    "audioID": 747,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 746,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd999c"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd999d"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd999e"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd999f"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd99a0"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd99a1"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd99a2"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd99a3"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd99a4"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd99a5"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd99a6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd999b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 747,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd99a8"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd99a9"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd99aa"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd99ab"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd99ac"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd99ad"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd99ae"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd99af"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd99b0"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd99b1"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd99b2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd99a7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "748",
        "name": "Nguyễn Minh Thái Qúy",
        "cty": "ABC",
        "hotline": "94541329"
      },
      "customer": {
        "customerID": "748",
        "name": "Lê Khánh Hồng",
        "phone": "75998352",
        "address": "Hà Nội",
        "cmnd": "52560009"
      },
      "fileURL": "talk748.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "566s",
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
                "hết hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd99d9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99d8"
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
              "_id": "62ebc0e18a312c984bbd99db"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99da"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd99dd"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99dc"
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
              "_id": "62ebc0e18a312c984bbd99df"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99de"
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
              "_id": "62ebc0e18a312c984bbd99e1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99e0"
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
              "_id": "62ebc0e18a312c984bbd99e3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99e2"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd99bf",
    "audioID": 748,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 747,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd99c1"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd99c2"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd99c3"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd99c4"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd99c5"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd99c6"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd99c7"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd99c8"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd99c9"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd99ca"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd99cb"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd99c0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 748,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd99cd"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd99ce"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd99cf"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd99d0"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd99d1"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd99d2"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd99d3"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd99d4"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd99d5"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd99d6"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd99d7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd99cc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "749",
        "name": "Trương An Khánh",
        "cty": "ABC",
        "hotline": "43673944"
      },
      "customer": {
        "customerID": "749",
        "name": "Nguyễn Hữu Dạ",
        "phone": "45278981",
        "address": "Hà Nội",
        "cmnd": "50049231"
      },
      "fileURL": "talk749.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "415s",
      "date": "6/9/2022",
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
              "_id": "62ebc0e18a312c984bbd99fe"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99fd"
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
              "_id": "62ebc0e18a312c984bbd9a00"
            }
          ],
          "_id": "62ebc0e18a312c984bbd99ff"
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
              "_id": "62ebc0e18a312c984bbd9a02"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a01"
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
              "_id": "62ebc0e18a312c984bbd9a04"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a03"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9a06"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a05"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9a08"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a07"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd99e4",
    "audioID": 749,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 748,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd99e6"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd99e7"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd99e8"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd99e9"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd99ea"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd99eb"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd99ec"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd99ed"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd99ee"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd99ef"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd99f0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd99e5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 749,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd99f2"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd99f3"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd99f4"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd99f5"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd99f6"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd99f7"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd99f8"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd99f9"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd99fa"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd99fb"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd99fc"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd99f1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "750",
        "name": "Ngô An Thái Qúy",
        "cty": "ABC",
        "hotline": "45307350"
      },
      "customer": {
        "customerID": "750",
        "name": "Đặng Quốc Lợi",
        "phone": "85715094",
        "address": "Hà Nội",
        "cmnd": "50000209"
      },
      "fileURL": "talk750.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "539s",
      "date": "31/11/2022",
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
              "_id": "62ebc0e18a312c984bbd9a23"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a22"
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
              "_id": "62ebc0e18a312c984bbd9a25"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a24"
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
              "_id": "62ebc0e18a312c984bbd9a27"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a26"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9a29"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a28"
        },
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
              "_id": "62ebc0e18a312c984bbd9a2b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a2a"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9a2d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a2c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9a09",
    "audioID": 750,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 749,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9a0b"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a0c"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9a0d"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a0e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a0f"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9a10"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a11"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9a12"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a13"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a14"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9a15"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9a0a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 750,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9a17"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a18"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9a19"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9a1a"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a1b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a1c"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a1d"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a1e"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a1f"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9a20"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a21"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9a16"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "751",
        "name": "Trần An Khánh",
        "cty": "ABC",
        "hotline": "51954911"
      },
      "customer": {
        "customerID": "751",
        "name": "Phạm Minh Quyền",
        "phone": "86953225",
        "address": "Hà Nội",
        "cmnd": "20450291"
      },
      "fileURL": "talk751.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "302s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9a48"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a47"
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
              "_id": "62ebc0e18a312c984bbd9a4a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a49"
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
              "_id": "62ebc0e18a312c984bbd9a4c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a4b"
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
              "_id": "62ebc0e18a312c984bbd9a4e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a4d"
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
              "_id": "62ebc0e18a312c984bbd9a50"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a4f"
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
              "_id": "62ebc0e18a312c984bbd9a52"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a51"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9a2e",
    "audioID": 751,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 750,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9a30"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9a31"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a32"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a33"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9a34"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a35"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9a36"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a37"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9a38"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9a39"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a3a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9a2f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 751,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a3c"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a3d"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9a3e"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a3f"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9a40"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a41"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a42"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a43"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9a44"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a45"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9a46"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9a3b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "752",
        "name": "Phạm Minh Khánh",
        "cty": "ABC",
        "hotline": "12001833"
      },
      "customer": {
        "customerID": "752",
        "name": "Huỳnh Hữu Ánh",
        "phone": "76117973",
        "address": "Hà Nội",
        "cmnd": "80609246"
      },
      "fileURL": "talk752.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "321s",
      "date": "1/9/2022",
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
              "_id": "62ebc0e18a312c984bbd9a6d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a6c"
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
              "_id": "62ebc0e18a312c984bbd9a6f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a6e"
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
              "_id": "62ebc0e18a312c984bbd9a71"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a70"
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
              "_id": "62ebc0e18a312c984bbd9a73"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a72"
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
              "_id": "62ebc0e18a312c984bbd9a75"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a74"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9a77"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a76"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9a53",
    "audioID": 752,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 751,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9a55"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9a56"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9a57"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9a58"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9a59"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9a5a"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a5b"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9a5c"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a5d"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9a5e"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9a5f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9a54"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 752,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9a61"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9a62"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9a63"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a64"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9a65"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a66"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9a67"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a68"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a69"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9a6a"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9a6b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9a60"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "753",
        "name": "Trần Văn Duy",
        "cty": "ABC",
        "hotline": "60645253"
      },
      "customer": {
        "customerID": "753",
        "name": "Lê Phương Duy",
        "phone": "85119139",
        "address": "Hà Nội",
        "cmnd": "49915713"
      },
      "fileURL": "talk753.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "362s",
      "date": "16/4/2022",
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
              "_id": "62ebc0e18a312c984bbd9a92"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a91"
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
              "_id": "62ebc0e18a312c984bbd9a94"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a93"
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
              "_id": "62ebc0e18a312c984bbd9a96"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a95"
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
              "_id": "62ebc0e18a312c984bbd9a98"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a97"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9a9a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a99"
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
              "_id": "62ebc0e18a312c984bbd9a9c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9a9b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9a78",
    "audioID": 753,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 752,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a7a"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a7b"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a7c"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a7d"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a7e"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9a7f"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a80"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a81"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9a82"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9a83"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a84"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9a79"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 753,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9a86"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a87"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a88"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9a89"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9a8a"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a8b"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9a8c"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9a8d"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9a8e"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9a8f"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9a90"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9a85"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "754",
        "name": "Đặng Khánh Thái Qúy",
        "cty": "ABC",
        "hotline": "92116991"
      },
      "customer": {
        "customerID": "754",
        "name": "Nguyễn Dương Hồng",
        "phone": "70444572",
        "address": "Hà Nội",
        "cmnd": "95824967"
      },
      "fileURL": "talk754.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "326s",
      "date": "22/6/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbd9ab7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ab6"
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
              "_id": "62ebc0e18a312c984bbd9ab9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ab8"
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
              "_id": "62ebc0e18a312c984bbd9abb"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9aba"
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
              "_id": "62ebc0e18a312c984bbd9abd"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9abc"
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
              "_id": "62ebc0e18a312c984bbd9abf"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9abe"
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
              "_id": "62ebc0e18a312c984bbd9ac1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ac0"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9a9d",
    "audioID": 754,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 753,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9a9f"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9aa0"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9aa1"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9aa2"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9aa3"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9aa4"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9aa5"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9aa6"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9aa7"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9aa8"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9aa9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9a9e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 754,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9aab"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9aac"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9aad"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9aae"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9aaf"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9ab0"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9ab1"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9ab2"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ab3"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9ab4"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ab5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9aaa"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "755",
        "name": "Trần Phương Hồng",
        "cty": "ABC",
        "hotline": "15493836"
      },
      "customer": {
        "customerID": "755",
        "name": "Phạm Hải Duy",
        "phone": "13136713",
        "address": "Hà Nội",
        "cmnd": "45052662"
      },
      "fileURL": "talk755.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "472s",
      "date": "26/6/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9adc"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9adb"
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
              "_id": "62ebc0e18a312c984bbd9ade"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9add"
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
              "_id": "62ebc0e18a312c984bbd9ae0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9adf"
        },
        {
          "name": "BR_Wrongnumber",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9ae2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ae1"
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
              "_id": "62ebc0e18a312c984bbd9ae4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ae3"
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
              "_id": "62ebc0e18a312c984bbd9ae6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ae5"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9ac2",
    "audioID": 755,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 754,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ac4"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9ac5"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ac6"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ac7"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ac8"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9ac9"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9aca"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9acb"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9acc"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9acd"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9ace"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9ac3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 755,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9ad0"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9ad1"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9ad2"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ad3"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9ad4"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9ad5"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ad6"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ad7"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9ad8"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9ad9"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ada"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9acf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "756",
        "name": "Bùi Quốc Lợi",
        "cty": "ABC",
        "hotline": "77065139"
      },
      "customer": {
        "customerID": "756",
        "name": "Trần Phương An",
        "phone": "38265433",
        "address": "Hà Nội",
        "cmnd": "51000858"
      },
      "fileURL": "talk756.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "281s",
      "date": "1/5/2022",
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
              "_id": "62ebc0e18a312c984bbd9b01"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b00"
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
              "_id": "62ebc0e18a312c984bbd9b03"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b02"
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
              "_id": "62ebc0e18a312c984bbd9b05"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b04"
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
              "_id": "62ebc0e18a312c984bbd9b07"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b06"
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
              "_id": "62ebc0e18a312c984bbd9b09"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b08"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9b0b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b0a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9ae7",
    "audioID": 756,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 755,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9ae9"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9aea"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9aeb"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9aec"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9aed"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9aee"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9aef"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9af0"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9af1"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9af2"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9af3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9ae8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 756,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9af5"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9af6"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9af7"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9af8"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9af9"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9afa"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9afb"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9afc"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9afd"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9afe"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9aff"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9af4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "757",
        "name": "Nguyễn Phương Quyền",
        "cty": "ABC",
        "hotline": "40938629"
      },
      "customer": {
        "customerID": "757",
        "name": "Phan Dương An",
        "phone": "20383696",
        "address": "Hà Nội",
        "cmnd": "85073182"
      },
      "fileURL": "talk757.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "414s",
      "date": "1/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9b26"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b25"
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
              "_id": "62ebc0e18a312c984bbd9b28"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b27"
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
              "_id": "62ebc0e18a312c984bbd9b2a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b29"
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
              "_id": "62ebc0e18a312c984bbd9b2c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b2b"
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
              "_id": "62ebc0e18a312c984bbd9b2e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b2d"
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
              "_id": "62ebc0e18a312c984bbd9b30"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b2f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9b0c",
    "audioID": 757,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 756,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9b0e"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9b0f"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9b10"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9b11"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9b12"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b13"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9b14"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9b15"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9b16"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9b17"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b18"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9b0d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 757,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b1a"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9b1b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9b1c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b1d"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9b1e"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9b1f"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9b20"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9b21"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b22"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b23"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b24"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9b19"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "758",
        "name": "Trương Phương Hồng",
        "cty": "ABC",
        "hotline": "95501872"
      },
      "customer": {
        "customerID": "758",
        "name": "Đặng Thị Lợi",
        "phone": "43399828",
        "address": "Hà Nội",
        "cmnd": "21521515"
      },
      "fileURL": "talk758.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "9s",
      "date": "23/2/2022",
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
              "_id": "62ebc0e18a312c984bbd9b4b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b4a"
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
              "_id": "62ebc0e18a312c984bbd9b4d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b4c"
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
              "_id": "62ebc0e18a312c984bbd9b4f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b4e"
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
              "_id": "62ebc0e18a312c984bbd9b51"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b50"
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
              "_id": "62ebc0e18a312c984bbd9b53"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b52"
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
              "_id": "62ebc0e18a312c984bbd9b55"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b54"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9b31",
    "audioID": 758,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 757,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9b33"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9b34"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b35"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b36"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9b37"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b38"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9b39"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b3a"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9b3b"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b3c"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9b3d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9b32"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 758,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9b3f"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b40"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b41"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9b42"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9b43"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b44"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b45"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9b46"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b47"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9b48"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9b49"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9b3e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "759",
        "name": "Nguyễn Văn Ánh",
        "cty": "ABC",
        "hotline": "63907325"
      },
      "customer": {
        "customerID": "759",
        "name": "Đặng An Ánh",
        "phone": "77057907",
        "address": "Hà Nội",
        "cmnd": "41373448"
      },
      "fileURL": "talk759.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "382s",
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
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9b70"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b6f"
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
              "_id": "62ebc0e18a312c984bbd9b72"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b71"
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
              "_id": "62ebc0e18a312c984bbd9b74"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b73"
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
              "_id": "62ebc0e18a312c984bbd9b76"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b75"
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
              "_id": "62ebc0e18a312c984bbd9b78"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b77"
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
              "_id": "62ebc0e18a312c984bbd9b7a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b79"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9b56",
    "audioID": 759,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 758,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9b58"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9b59"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9b5a"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9b5b"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b5c"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b5d"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b5e"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9b5f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9b60"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b61"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9b62"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9b57"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 759,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b64"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9b65"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b66"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b67"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9b68"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9b69"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b6a"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9b6b"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b6c"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9b6d"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b6e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9b63"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "760",
        "name": "Trương An Lợi",
        "cty": "ABC",
        "hotline": "19321227"
      },
      "customer": {
        "customerID": "760",
        "name": "Huỳnh Minh Duy",
        "phone": "10285834",
        "address": "Hà Nội",
        "cmnd": "69909317"
      },
      "fileURL": "talk760.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "86s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9b95"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b94"
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
              "_id": "62ebc0e18a312c984bbd9b97"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b96"
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
              "_id": "62ebc0e18a312c984bbd9b99"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b98"
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
              "_id": "62ebc0e18a312c984bbd9b9b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b9a"
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
              "_id": "62ebc0e18a312c984bbd9b9d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b9c"
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
              "_id": "62ebc0e18a312c984bbd9b9f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9b9e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9b7b",
    "audioID": 760,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 759,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b7d"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b7e"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b7f"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b80"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b81"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9b82"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9b83"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b84"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9b85"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b86"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b87"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9b7c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 760,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9b89"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9b8a"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9b8b"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9b8c"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9b8d"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9b8e"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9b8f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9b90"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9b91"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9b92"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9b93"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9b88"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "761",
        "name": "Phan Hải Quyền",
        "cty": "ABC",
        "hotline": "23216834"
      },
      "customer": {
        "customerID": "761",
        "name": "Phan Minh Hồng",
        "phone": "42394761",
        "address": "Hà Nội",
        "cmnd": "52092458"
      },
      "fileURL": "talk761.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "351s",
      "date": "23/11/2022",
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
              "_id": "62ebc0e18a312c984bbd9bba"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9bb9"
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
              "_id": "62ebc0e18a312c984bbd9bbc"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9bbb"
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
              "_id": "62ebc0e18a312c984bbd9bbe"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9bbd"
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
              "_id": "62ebc0e18a312c984bbd9bc0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9bbf"
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
              "_id": "62ebc0e18a312c984bbd9bc2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9bc1"
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
              "_id": "62ebc0e18a312c984bbd9bc4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9bc3"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9ba0",
    "audioID": 761,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 760,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9ba2"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ba3"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ba4"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9ba5"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9ba6"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ba7"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ba8"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ba9"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9baa"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9bab"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9bac"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9ba1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 761,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9bae"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9baf"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9bb0"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9bb1"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9bb2"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9bb3"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9bb4"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9bb5"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9bb6"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9bb7"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9bb8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9bad"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "762",
        "name": "Nguyễn Hữu Dạ",
        "cty": "ABC",
        "hotline": "48965461"
      },
      "customer": {
        "customerID": "762",
        "name": "Huỳnh Dương Dạ",
        "phone": "43671990",
        "address": "Hà Nội",
        "cmnd": "41486622"
      },
      "fileURL": "talk762.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "590s",
      "date": "17/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9bdf"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9bde"
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
              "_id": "62ebc0e18a312c984bbd9be1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9be0"
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
              "_id": "62ebc0e18a312c984bbd9be3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9be2"
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
              "_id": "62ebc0e18a312c984bbd9be5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9be4"
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
              "_id": "62ebc0e18a312c984bbd9be7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9be6"
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
              "_id": "62ebc0e18a312c984bbd9be9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9be8"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9bc5",
    "audioID": 762,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 761,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9bc7"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9bc8"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9bc9"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9bca"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9bcb"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9bcc"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9bcd"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9bce"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9bcf"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9bd0"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9bd1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9bc6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 762,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9bd3"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9bd4"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9bd5"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9bd6"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9bd7"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9bd8"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9bd9"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9bda"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9bdb"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9bdc"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9bdd"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9bd2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "763",
        "name": "Trần Hải Duy",
        "cty": "ABC",
        "hotline": "95548101"
      },
      "customer": {
        "customerID": "763",
        "name": "Đặng Văn Ánh",
        "phone": "95775429",
        "address": "Hà Nội",
        "cmnd": "63203319"
      },
      "fileURL": "talk763.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "524s",
      "date": "25/5/2022",
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
              "_id": "62ebc0e18a312c984bbd9c04"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c03"
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
              "_id": "62ebc0e18a312c984bbd9c06"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c05"
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
              "_id": "62ebc0e18a312c984bbd9c08"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c07"
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
              "_id": "62ebc0e18a312c984bbd9c0a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c09"
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
              "_id": "62ebc0e18a312c984bbd9c0c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c0b"
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
              "_id": "62ebc0e18a312c984bbd9c0e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c0d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9bea",
    "audioID": 763,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 762,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9bec"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9bed"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9bee"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9bef"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9bf0"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9bf1"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9bf2"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9bf3"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9bf4"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9bf5"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9bf6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9beb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 763,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9bf8"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9bf9"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9bfa"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9bfb"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9bfc"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9bfd"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9bfe"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9bff"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c00"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9c01"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c02"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9bf7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "764",
        "name": "Ngô Minh Lợi",
        "cty": "ABC",
        "hotline": "51499773"
      },
      "customer": {
        "customerID": "764",
        "name": "Đặng Quốc Duy",
        "phone": "53430854",
        "address": "Hà Nội",
        "cmnd": "27167487"
      },
      "fileURL": "talk764.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "344s",
      "date": "17/12/2022",
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
              "_id": "62ebc0e18a312c984bbd9c29"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c28"
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
              "_id": "62ebc0e18a312c984bbd9c2b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c2a"
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
              "_id": "62ebc0e18a312c984bbd9c2d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c2c"
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
              "_id": "62ebc0e18a312c984bbd9c2f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c2e"
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
              "_id": "62ebc0e18a312c984bbd9c31"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c30"
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
              "_id": "62ebc0e18a312c984bbd9c33"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c32"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9c0f",
    "audioID": 764,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 763,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9c11"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9c12"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c13"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9c14"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c15"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9c16"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9c17"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9c18"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9c19"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9c1a"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c1b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9c10"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 764,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9c1d"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9c1e"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9c1f"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c20"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9c21"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9c22"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9c23"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9c24"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9c25"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c26"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9c27"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9c1c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "765",
        "name": "Lê Hữu Hồng",
        "cty": "ABC",
        "hotline": "50230001"
      },
      "customer": {
        "customerID": "765",
        "name": "Đặng Hữu Lợi",
        "phone": "79272526",
        "address": "Hà Nội",
        "cmnd": "80032105"
      },
      "fileURL": "talk765.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "140s",
      "date": "5/3/2022",
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
              "_id": "62ebc0e18a312c984bbd9c4e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c4d"
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
              "_id": "62ebc0e18a312c984bbd9c50"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c4f"
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
              "_id": "62ebc0e18a312c984bbd9c52"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c51"
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
              "_id": "62ebc0e18a312c984bbd9c54"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c53"
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
              "_id": "62ebc0e18a312c984bbd9c56"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c55"
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
              "_id": "62ebc0e18a312c984bbd9c58"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c57"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9c34",
    "audioID": 765,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 764,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9c36"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c37"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9c38"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9c39"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c3a"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9c3b"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9c3c"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9c3d"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9c3e"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c3f"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9c40"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9c35"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 765,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9c42"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c43"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c44"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9c45"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9c46"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9c47"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9c48"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c49"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9c4a"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9c4b"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9c4c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9c41"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "766",
        "name": "Phan Hữu Quyền",
        "cty": "ABC",
        "hotline": "38069752"
      },
      "customer": {
        "customerID": "766",
        "name": "Phạm Minh Duy",
        "phone": "87062486",
        "address": "Hà Nội",
        "cmnd": "45235451"
      },
      "fileURL": "talk766.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "359s",
      "date": "8/3/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9c73"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c72"
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
              "_id": "62ebc0e18a312c984bbd9c75"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c74"
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
              "_id": "62ebc0e18a312c984bbd9c77"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c76"
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
              "_id": "62ebc0e18a312c984bbd9c79"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c78"
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
              "_id": "62ebc0e18a312c984bbd9c7b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c7a"
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
              "_id": "62ebc0e18a312c984bbd9c7d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c7c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9c59",
    "audioID": 766,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 765,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c5b"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c5c"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9c5d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9c5e"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c5f"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c60"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c61"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c62"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9c63"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c64"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c65"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9c5a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 766,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9c67"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9c68"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9c69"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9c6a"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9c6b"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9c6c"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9c6d"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9c6e"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9c6f"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c70"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c71"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9c66"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "767",
        "name": "Huỳnh An Quyền",
        "cty": "ABC",
        "hotline": "51775193"
      },
      "customer": {
        "customerID": "767",
        "name": "Lê Dương Hồng",
        "phone": "22954364",
        "address": "Hà Nội",
        "cmnd": "86319748"
      },
      "fileURL": "talk767.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "57s",
      "date": "3/2/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9c98"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c97"
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
              "_id": "62ebc0e18a312c984bbd9c9a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c99"
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
              "_id": "62ebc0e18a312c984bbd9c9c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c9b"
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
              "_id": "62ebc0e18a312c984bbd9c9e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c9d"
        },
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
              "_id": "62ebc0e18a312c984bbd9ca0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9c9f"
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
              "_id": "62ebc0e18a312c984bbd9ca2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ca1"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9c7e",
    "audioID": 767,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 766,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c80"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9c81"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9c82"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9c83"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c84"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9c85"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9c86"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c87"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c88"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9c89"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9c8a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9c7f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 767,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c8c"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9c8d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c8e"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c8f"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c90"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c91"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9c92"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9c93"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9c94"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9c95"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9c96"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9c8b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "768",
        "name": "Lê Hải Duy",
        "cty": "ABC",
        "hotline": "28501156"
      },
      "customer": {
        "customerID": "768",
        "name": "Lê An Thái Qúy",
        "phone": "64495764",
        "address": "Hà Nội",
        "cmnd": "63996802"
      },
      "fileURL": "talk768.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "245s",
      "date": "27/10/2022",
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
              "_id": "62ebc0e18a312c984bbd9cbd"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9cbc"
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
              "_id": "62ebc0e18a312c984bbd9cbf"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9cbe"
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
              "_id": "62ebc0e18a312c984bbd9cc1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9cc0"
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
              "_id": "62ebc0e18a312c984bbd9cc3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9cc2"
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
              "_id": "62ebc0e18a312c984bbd9cc5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9cc4"
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
              "_id": "62ebc0e18a312c984bbd9cc7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9cc6"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9ca3",
    "audioID": 768,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 767,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9ca5"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ca6"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9ca7"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ca8"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ca9"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9caa"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9cab"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9cac"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9cad"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9cae"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9caf"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9ca4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 768,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9cb1"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9cb2"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9cb3"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9cb4"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9cb5"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9cb6"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9cb7"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9cb8"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9cb9"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9cba"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9cbb"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9cb0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "769",
        "name": "Bùi Văn Lợi",
        "cty": "ABC",
        "hotline": "36127189"
      },
      "customer": {
        "customerID": "769",
        "name": "Huỳnh Minh Lợi",
        "phone": "31173744",
        "address": "Hà Nội",
        "cmnd": "35895227"
      },
      "fileURL": "talk769.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "536s",
      "date": "17/3/2022",
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
              "_id": "62ebc0e18a312c984bbd9ce2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ce1"
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
              "_id": "62ebc0e18a312c984bbd9ce4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ce3"
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
              "_id": "62ebc0e18a312c984bbd9ce6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ce5"
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
              "_id": "62ebc0e18a312c984bbd9ce8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ce7"
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
              "_id": "62ebc0e18a312c984bbd9cea"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ce9"
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
              "_id": "62ebc0e18a312c984bbd9cec"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ceb"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9cc8",
    "audioID": 769,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 768,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9cca"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ccb"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9ccc"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9ccd"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9cce"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ccf"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9cd0"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9cd1"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9cd2"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9cd3"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9cd4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9cc9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 769,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9cd6"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9cd7"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9cd8"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9cd9"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9cda"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9cdb"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9cdc"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9cdd"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9cde"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9cdf"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ce0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9cd5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "770",
        "name": "Đặng Quốc Hồng",
        "cty": "ABC",
        "hotline": "75485240"
      },
      "customer": {
        "customerID": "770",
        "name": "Đặng Khánh Hồng",
        "phone": "51422124",
        "address": "Hà Nội",
        "cmnd": "41620002"
      },
      "fileURL": "talk770.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "33s",
      "date": "16/10/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9d07"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d06"
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
              "_id": "62ebc0e18a312c984bbd9d09"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d08"
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
              "_id": "62ebc0e18a312c984bbd9d0b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d0a"
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
              "_id": "62ebc0e18a312c984bbd9d0d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d0c"
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
              "_id": "62ebc0e18a312c984bbd9d0f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d0e"
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
              "_id": "62ebc0e18a312c984bbd9d11"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d10"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9ced",
    "audioID": 770,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 769,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9cef"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9cf0"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9cf1"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9cf2"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9cf3"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9cf4"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9cf5"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9cf6"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9cf7"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9cf8"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9cf9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9cee"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 770,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9cfb"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9cfc"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9cfd"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9cfe"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9cff"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9d00"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9d01"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9d02"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9d03"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9d04"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9d05"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9cfa"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "771",
        "name": "Phan Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "34431463"
      },
      "customer": {
        "customerID": "771",
        "name": "Phan Minh Quyền",
        "phone": "94324561",
        "address": "Hà Nội",
        "cmnd": "58604055"
      },
      "fileURL": "talk771.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "184s",
      "date": "21/10/2022",
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
              "_id": "62ebc0e18a312c984bbd9d2c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d2b"
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
              "_id": "62ebc0e18a312c984bbd9d2e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d2d"
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
              "_id": "62ebc0e18a312c984bbd9d30"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d2f"
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
              "_id": "62ebc0e18a312c984bbd9d32"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d31"
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
              "_id": "62ebc0e18a312c984bbd9d34"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d33"
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
              "_id": "62ebc0e18a312c984bbd9d36"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d35"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9d12",
    "audioID": 771,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 770,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d14"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d15"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d16"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d17"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9d18"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d19"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d1a"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d1b"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d1c"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9d1d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9d1e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9d13"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 771,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d20"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9d21"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9d22"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d23"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9d24"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9d25"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d26"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d27"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9d28"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d29"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9d2a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9d1f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "772",
        "name": "Ngô Thị Ánh",
        "cty": "ABC",
        "hotline": "37162166"
      },
      "customer": {
        "customerID": "772",
        "name": "Ngô Khánh Duy",
        "phone": "63216627",
        "address": "Hà Nội",
        "cmnd": "71030035"
      },
      "fileURL": "talk772.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "11s",
      "date": "13/1/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9d51"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d50"
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
              "_id": "62ebc0e18a312c984bbd9d53"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d52"
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
              "_id": "62ebc0e18a312c984bbd9d55"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d54"
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
              "_id": "62ebc0e18a312c984bbd9d57"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d56"
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
              "_id": "62ebc0e18a312c984bbd9d59"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d58"
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
              "_id": "62ebc0e18a312c984bbd9d5b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d5a"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9d37",
    "audioID": 772,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 771,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d39"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d3a"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d3b"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9d3c"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d3d"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d3e"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9d3f"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d40"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9d41"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d42"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9d43"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9d38"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 772,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d45"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d46"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d47"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9d48"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d49"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d4a"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9d4b"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9d4c"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9d4d"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9d4e"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9d4f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9d44"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "773",
        "name": "Bùi Hải Cảnh",
        "cty": "ABC",
        "hotline": "82065354"
      },
      "customer": {
        "customerID": "773",
        "name": "Bùi An Ánh",
        "phone": "86155770",
        "address": "Hà Nội",
        "cmnd": "67916926"
      },
      "fileURL": "talk773.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "356s",
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
                "hết hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9d76"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d75"
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
              "_id": "62ebc0e18a312c984bbd9d78"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d77"
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
              "_id": "62ebc0e18a312c984bbd9d7a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d79"
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
              "_id": "62ebc0e18a312c984bbd9d7c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d7b"
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
              "_id": "62ebc0e18a312c984bbd9d7e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d7d"
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
              "_id": "62ebc0e18a312c984bbd9d80"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d7f"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9d5c",
    "audioID": 773,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 772,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9d5e"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9d5f"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9d60"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9d61"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9d62"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9d63"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9d64"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d65"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d66"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9d67"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9d68"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9d5d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 773,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d6a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9d6b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d6c"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d6d"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9d6e"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d6f"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d70"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d71"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d72"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d73"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d74"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9d69"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "774",
        "name": "Huỳnh Hải Cảnh",
        "cty": "ABC",
        "hotline": "78570968"
      },
      "customer": {
        "customerID": "774",
        "name": "Phan Quốc Thái Qúy",
        "phone": "27649451",
        "address": "Hà Nội",
        "cmnd": "48902228"
      },
      "fileURL": "talk774.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "509s",
      "date": "11/9/2022",
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
              "_id": "62ebc0e18a312c984bbd9d9b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d9a"
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
              "_id": "62ebc0e18a312c984bbd9d9d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d9c"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9d9f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9d9e"
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
              "_id": "62ebc0e18a312c984bbd9da1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9da0"
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
              "_id": "62ebc0e18a312c984bbd9da3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9da2"
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
              "_id": "62ebc0e18a312c984bbd9da5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9da4"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9d81",
    "audioID": 774,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 773,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d83"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d84"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9d85"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d86"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9d87"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9d88"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9d89"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d8a"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9d8b"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d8c"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d8d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9d82"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 774,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9d8f"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9d90"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9d91"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d92"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d93"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d94"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9d95"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9d96"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9d97"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d98"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9d99"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9d8e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "775",
        "name": "Bùi Hải Khánh",
        "cty": "ABC",
        "hotline": "40793737"
      },
      "customer": {
        "customerID": "775",
        "name": "Nguyễn Hữu Hồng",
        "phone": "62059465",
        "address": "Hà Nội",
        "cmnd": "80243866"
      },
      "fileURL": "talk775.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "291s",
      "date": "10/1/2022",
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
              "_id": "62ebc0e18a312c984bbd9dc0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9dbf"
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
              "_id": "62ebc0e18a312c984bbd9dc2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9dc1"
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
              "_id": "62ebc0e18a312c984bbd9dc4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9dc3"
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
              "_id": "62ebc0e18a312c984bbd9dc6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9dc5"
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
              "_id": "62ebc0e18a312c984bbd9dc8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9dc7"
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
              "_id": "62ebc0e18a312c984bbd9dca"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9dc9"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9da6",
    "audioID": 775,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 774,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9da8"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9da9"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9daa"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9dab"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9dac"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9dad"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9dae"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9daf"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9db0"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9db1"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9db2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9da7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 775,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9db4"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9db5"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9db6"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9db7"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9db8"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9db9"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9dba"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9dbb"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9dbc"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9dbd"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9dbe"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9db3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "776",
        "name": "Nguyễn Thị Dạ",
        "cty": "ABC",
        "hotline": "55123691"
      },
      "customer": {
        "customerID": "776",
        "name": "Nguyễn Hữu Khánh",
        "phone": "89103680",
        "address": "Hà Nội",
        "cmnd": "77154005"
      },
      "fileURL": "talk776.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "105s",
      "date": "6/5/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9de5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9de4"
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
              "_id": "62ebc0e18a312c984bbd9de7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9de6"
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
              "_id": "62ebc0e18a312c984bbd9de9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9de8"
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
              "_id": "62ebc0e18a312c984bbd9deb"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9dea"
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
              "_id": "62ebc0e18a312c984bbd9ded"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9dec"
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
              "_id": "62ebc0e18a312c984bbd9def"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9dee"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9dcb",
    "audioID": 776,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 775,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9dcd"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9dce"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9dcf"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9dd0"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9dd1"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9dd2"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9dd3"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9dd4"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9dd5"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9dd6"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9dd7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9dcc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 776,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9dd9"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9dda"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9ddb"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ddc"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ddd"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9dde"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9ddf"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9de0"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9de1"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9de2"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9de3"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9dd8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "777",
        "name": "Ngô Phương Dạ",
        "cty": "ABC",
        "hotline": "16849545"
      },
      "customer": {
        "customerID": "777",
        "name": "Phan Hải Hồng",
        "phone": "11491112",
        "address": "Hà Nội",
        "cmnd": "86791022"
      },
      "fileURL": "talk777.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "45s",
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
                "quá hạn"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9e0a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e09"
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
              "_id": "62ebc0e18a312c984bbd9e0c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e0b"
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
              "_id": "62ebc0e18a312c984bbd9e0e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e0d"
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
              "_id": "62ebc0e18a312c984bbd9e10"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e0f"
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
              "_id": "62ebc0e18a312c984bbd9e12"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e11"
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
              "_id": "62ebc0e18a312c984bbd9e14"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e13"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9df0",
    "audioID": 777,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 776,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9df2"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9df3"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9df4"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9df5"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9df6"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9df7"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9df8"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9df9"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9dfa"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9dfb"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9dfc"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9df1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 777,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9dfe"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9dff"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9e00"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e01"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e02"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e03"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e04"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9e05"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9e06"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e07"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e08"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9dfd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "778",
        "name": "Huỳnh Văn Hồng",
        "cty": "ABC",
        "hotline": "26989425"
      },
      "customer": {
        "customerID": "778",
        "name": "Đặng Thị Lợi",
        "phone": "45297447",
        "address": "Hà Nội",
        "cmnd": "74986884"
      },
      "fileURL": "talk778.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "121s",
      "date": "29/7/2022",
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
              "_id": "62ebc0e18a312c984bbd9e2f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e2e"
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
              "_id": "62ebc0e18a312c984bbd9e31"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e30"
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
              "_id": "62ebc0e18a312c984bbd9e33"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e32"
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
              "_id": "62ebc0e18a312c984bbd9e35"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e34"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9e37"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e36"
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
              "_id": "62ebc0e18a312c984bbd9e39"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e38"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9e15",
    "audioID": 778,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 777,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e17"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9e18"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e19"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e1a"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e1b"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e1c"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e1d"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9e1e"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e1f"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e20"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e21"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9e16"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 778,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9e23"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e24"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e25"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e26"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e27"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e28"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e29"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9e2a"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e2b"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e2c"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9e2d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9e22"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "779",
        "name": "Lê Văn Duy",
        "cty": "ABC",
        "hotline": "51146236"
      },
      "customer": {
        "customerID": "779",
        "name": "Lê Văn An",
        "phone": "65023994",
        "address": "Hà Nội",
        "cmnd": "24024096"
      },
      "fileURL": "talk779.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "300s",
      "date": "25/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbd9e54"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e53"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9e56"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e55"
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
              "_id": "62ebc0e18a312c984bbd9e58"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e57"
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
              "_id": "62ebc0e18a312c984bbd9e5a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e59"
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
              "_id": "62ebc0e18a312c984bbd9e5c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e5b"
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
              "_id": "62ebc0e18a312c984bbd9e5e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e5d"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9e3a",
    "audioID": 779,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 778,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e3c"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9e3d"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9e3e"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e3f"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e40"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e41"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e42"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9e43"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e44"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e45"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e46"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9e3b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 779,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e48"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9e49"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e4a"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e4b"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9e4c"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e4d"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e4e"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e4f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e50"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9e51"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e52"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9e47"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "780",
        "name": "Phan Quốc Duy",
        "cty": "ABC",
        "hotline": "95162576"
      },
      "customer": {
        "customerID": "780",
        "name": "Trương Hải Cảnh",
        "phone": "78698592",
        "address": "Hà Nội",
        "cmnd": "28154163"
      },
      "fileURL": "talk780.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "459s",
      "date": "22/6/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9e79"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e78"
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
              "_id": "62ebc0e18a312c984bbd9e7b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e7a"
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
              "_id": "62ebc0e18a312c984bbd9e7d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e7c"
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
              "_id": "62ebc0e18a312c984bbd9e7f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e7e"
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
              "_id": "62ebc0e18a312c984bbd9e81"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e80"
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
              "_id": "62ebc0e18a312c984bbd9e83"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e82"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9e5f",
    "audioID": 780,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 779,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e61"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e62"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9e63"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e64"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e65"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e66"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e67"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e68"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9e69"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e6a"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e6b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9e60"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 780,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e6d"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e6e"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9e6f"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e70"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e71"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e72"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e73"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e74"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e75"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e76"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e77"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9e6c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "781",
        "name": "Nguyễn Hữu Thái Qúy",
        "cty": "ABC",
        "hotline": "56867080"
      },
      "customer": {
        "customerID": "781",
        "name": "Bùi Phương Hồng",
        "phone": "14500937",
        "address": "Hà Nội",
        "cmnd": "69363780"
      },
      "fileURL": "talk781.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "58s",
      "date": "8/10/2022",
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
              "_id": "62ebc0e18a312c984bbd9e9e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e9d"
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
              "_id": "62ebc0e18a312c984bbd9ea0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9e9f"
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
              "_id": "62ebc0e18a312c984bbd9ea2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ea1"
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
              "_id": "62ebc0e18a312c984bbd9ea4"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ea3"
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
              "_id": "62ebc0e18a312c984bbd9ea6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ea5"
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
              "_id": "62ebc0e18a312c984bbd9ea8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ea7"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9e84",
    "audioID": 781,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 780,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9e86"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e87"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e88"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9e89"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9e8a"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e8b"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e8c"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e8d"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e8e"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e8f"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9e90"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9e85"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 781,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e92"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e93"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e94"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9e95"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e96"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e97"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9e98"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9e99"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e9a"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9e9b"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9e9c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9e91"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "782",
        "name": "Trương Quốc Ánh",
        "cty": "ABC",
        "hotline": "95164090"
      },
      "customer": {
        "customerID": "782",
        "name": "Trương Phương Thái Qúy",
        "phone": "58762618",
        "address": "Hà Nội",
        "cmnd": "34325158"
      },
      "fileURL": "talk782.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "102s",
      "date": "31/2/2022",
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
              "_id": "62ebc0e18a312c984bbd9ec3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ec2"
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
              "_id": "62ebc0e18a312c984bbd9ec5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ec4"
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
              "_id": "62ebc0e18a312c984bbd9ec7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ec6"
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
              "_id": "62ebc0e18a312c984bbd9ec9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ec8"
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
              "_id": "62ebc0e18a312c984bbd9ecb"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9eca"
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
              "_id": "62ebc0e18a312c984bbd9ecd"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ecc"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9ea9",
    "audioID": 782,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 781,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9eab"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9eac"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ead"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9eae"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9eaf"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9eb0"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9eb1"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9eb2"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9eb3"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9eb4"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9eb5"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9eaa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 782,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9eb7"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9eb8"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9eb9"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9eba"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ebb"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9ebc"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9ebd"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ebe"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ebf"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ec0"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9ec1"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9eb6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "783",
        "name": "Phạm Hải Dạ",
        "cty": "ABC",
        "hotline": "60866892"
      },
      "customer": {
        "customerID": "783",
        "name": "Ngô Hải Lợi",
        "phone": "16535192",
        "address": "Hà Nội",
        "cmnd": "72459901"
      },
      "fileURL": "talk783.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "304s",
      "date": "31/7/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbd9ee8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ee7"
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
              "_id": "62ebc0e18a312c984bbd9eea"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ee9"
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
              "_id": "62ebc0e18a312c984bbd9eec"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9eeb"
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
              "_id": "62ebc0e18a312c984bbd9eee"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9eed"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9ef0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9eef"
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
              "_id": "62ebc0e18a312c984bbd9ef2"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ef1"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9ece",
    "audioID": 783,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 782,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9ed0"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ed1"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9ed2"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9ed3"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9ed4"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9ed5"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9ed6"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9ed7"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9ed8"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9ed9"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9eda"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9ecf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 783,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9edc"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9edd"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ede"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9edf"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ee0"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9ee1"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9ee2"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ee3"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ee4"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9ee5"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ee6"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9edb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "784",
        "name": "Bùi Thị Dạ",
        "cty": "ABC",
        "hotline": "82372733"
      },
      "customer": {
        "customerID": "784",
        "name": "Ngô Phương Quyền",
        "phone": "38772745",
        "address": "Hà Nội",
        "cmnd": "70426874"
      },
      "fileURL": "talk784.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "224s",
      "date": "6/11/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbd9f0d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f0c"
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
              "_id": "62ebc0e18a312c984bbd9f0f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f0e"
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
              "_id": "62ebc0e18a312c984bbd9f11"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f10"
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
              "_id": "62ebc0e18a312c984bbd9f13"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f12"
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
              "_id": "62ebc0e18a312c984bbd9f15"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f14"
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
              "_id": "62ebc0e18a312c984bbd9f17"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f16"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9ef3",
    "audioID": 784,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 783,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9ef5"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9ef6"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9ef7"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9ef8"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9ef9"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9efa"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9efb"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9efc"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9efd"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9efe"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9eff"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9ef4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 784,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f01"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9f02"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f03"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9f04"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9f05"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f06"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9f07"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9f08"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f09"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f0a"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f0b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9f00"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "785",
        "name": "Phan Minh Lợi",
        "cty": "ABC",
        "hotline": "18124788"
      },
      "customer": {
        "customerID": "785",
        "name": "Phan Quốc Duy",
        "phone": "51624848",
        "address": "Hà Nội",
        "cmnd": "35839561"
      },
      "fileURL": "talk785.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "401s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9f32"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f31"
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
              "_id": "62ebc0e18a312c984bbd9f34"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f33"
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
              "_id": "62ebc0e18a312c984bbd9f36"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f35"
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
              "_id": "62ebc0e18a312c984bbd9f38"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f37"
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
              "_id": "62ebc0e18a312c984bbd9f3a"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f39"
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
              "_id": "62ebc0e18a312c984bbd9f3c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f3b"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9f18",
    "audioID": 785,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 784,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9f1a"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f1b"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9f1c"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9f1d"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f1e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f1f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9f20"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f21"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9f22"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f23"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f24"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9f19"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 785,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f26"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f27"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f28"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9f29"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f2a"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f2b"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9f2c"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f2d"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9f2e"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9f2f"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f30"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9f25"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "786",
        "name": "Nguyễn Văn Duy",
        "cty": "ABC",
        "hotline": "68475369"
      },
      "customer": {
        "customerID": "786",
        "name": "Lê Văn Hồng",
        "phone": "67911870",
        "address": "Hà Nội",
        "cmnd": "67981437"
      },
      "fileURL": "talk786.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "447s",
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
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbd9f57"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f56"
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
              "_id": "62ebc0e18a312c984bbd9f59"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f58"
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
              "_id": "62ebc0e18a312c984bbd9f5b"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f5a"
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
              "_id": "62ebc0e18a312c984bbd9f5d"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f5c"
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
              "_id": "62ebc0e18a312c984bbd9f5f"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f5e"
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
              "_id": "62ebc0e18a312c984bbd9f61"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f60"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9f3d",
    "audioID": 786,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 785,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f3f"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f40"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f41"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9f42"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f43"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f44"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f45"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9f46"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9f47"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9f48"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f49"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9f3e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 786,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9f4b"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f4c"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9f4d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f4e"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f4f"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f50"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f51"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f52"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f53"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f54"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f55"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9f4a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "787",
        "name": "Phan Quốc Duy",
        "cty": "ABC",
        "hotline": "57063507"
      },
      "customer": {
        "customerID": "787",
        "name": "Lê An Dạ",
        "phone": "90826112",
        "address": "Hà Nội",
        "cmnd": "34926308"
      },
      "fileURL": "talk787.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "404s",
      "date": "20/11/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9f7c"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f7b"
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
              "_id": "62ebc0e18a312c984bbd9f7e"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f7d"
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
              "_id": "62ebc0e18a312c984bbd9f80"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f7f"
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
              "_id": "62ebc0e18a312c984bbd9f82"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f81"
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
              "_id": "62ebc0e18a312c984bbd9f84"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f83"
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
              "_id": "62ebc0e18a312c984bbd9f86"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9f85"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9f62",
    "audioID": 787,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 786,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f64"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f65"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9f66"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9f67"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f68"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f69"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9f6a"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9f6b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f6c"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f6d"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9f6e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9f63"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 787,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9f70"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9f71"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f72"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f73"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f74"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9f75"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f76"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9f77"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9f78"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f79"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f7a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9f6f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "788",
        "name": "Nguyễn Khánh Khánh",
        "cty": "ABC",
        "hotline": "47867022"
      },
      "customer": {
        "customerID": "788",
        "name": "Đặng Văn Quyền",
        "phone": "86293418",
        "address": "Hà Nội",
        "cmnd": "15386045"
      },
      "fileURL": "talk788.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "402s",
      "date": "15/1/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbd9fa1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fa0"
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
              "_id": "62ebc0e18a312c984bbd9fa3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fa2"
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
              "_id": "62ebc0e18a312c984bbd9fa5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fa4"
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
              "_id": "62ebc0e18a312c984bbd9fa7"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fa6"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbd9fa9"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fa8"
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
              "_id": "62ebc0e18a312c984bbd9fab"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9faa"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9f87",
    "audioID": 788,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 787,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f89"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f8a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f8b"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9f8c"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f8d"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f8e"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f8f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f90"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9f91"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9f92"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9f93"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9f88"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 788,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9f95"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f96"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9f97"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f98"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9f99"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9f9a"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9f9b"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9f9c"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9f9d"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9f9e"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9f9f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9f94"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "789",
        "name": "Ngô Hữu Duy",
        "cty": "ABC",
        "hotline": "46875385"
      },
      "customer": {
        "customerID": "789",
        "name": "Phạm Văn Dạ",
        "phone": "54749351",
        "address": "Hà Nội",
        "cmnd": "90235121"
      },
      "fileURL": "talk789.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "133s",
      "date": "15/3/2022",
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
              "_id": "62ebc0e18a312c984bbd9fc6"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fc5"
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
              "_id": "62ebc0e18a312c984bbd9fc8"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fc7"
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
              "_id": "62ebc0e18a312c984bbd9fca"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fc9"
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
              "_id": "62ebc0e18a312c984bbd9fcc"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fcb"
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
              "_id": "62ebc0e18a312c984bbd9fce"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fcd"
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
              "_id": "62ebc0e18a312c984bbd9fd0"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fcf"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9fac",
    "audioID": 789,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 788,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9fae"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9faf"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9fb0"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9fb1"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9fb2"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9fb3"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9fb4"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9fb5"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9fb6"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9fb7"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9fb8"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9fad"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 789,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9fba"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9fbb"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9fbc"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9fbd"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9fbe"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9fbf"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9fc0"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9fc1"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9fc2"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9fc3"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9fc4"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9fb9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "790",
        "name": "Lê Dương Lợi",
        "cty": "ABC",
        "hotline": "20117590"
      },
      "customer": {
        "customerID": "790",
        "name": "Ngô Hải Thái Qúy",
        "phone": "19618634",
        "address": "Hà Nội",
        "cmnd": "64491933"
      },
      "fileURL": "talk790.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "522s",
      "date": "31/3/2022",
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
              "_id": "62ebc0e18a312c984bbd9feb"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fea"
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
              "_id": "62ebc0e18a312c984bbd9fed"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fec"
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
              "_id": "62ebc0e18a312c984bbd9fef"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9fee"
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
              "_id": "62ebc0e18a312c984bbd9ff1"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ff0"
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
              "_id": "62ebc0e18a312c984bbd9ff3"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ff2"
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
              "_id": "62ebc0e18a312c984bbd9ff5"
            }
          ],
          "_id": "62ebc0e18a312c984bbd9ff4"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9fd1",
    "audioID": 790,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 789,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbd9fd3"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9fd4"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9fd5"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9fd6"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9fd7"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9fd8"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9fd9"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9fda"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9fdb"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9fdc"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9fdd"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9fd2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 790,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9fdf"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9fe0"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbd9fe1"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9fe2"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9fe3"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbd9fe4"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9fe5"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbd9fe6"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9fe7"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9fe8"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbd9fe9"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9fde"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "791",
        "name": "Phan Văn Hồng",
        "cty": "ABC",
        "hotline": "11300790"
      },
      "customer": {
        "customerID": "791",
        "name": "Trần Thị Lợi",
        "phone": "24169356",
        "address": "Hà Nội",
        "cmnd": "49218521"
      },
      "fileURL": "talk791.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "35s",
      "date": "2/4/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbda010"
            }
          ],
          "_id": "62ebc0e18a312c984bbda00f"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda012"
            }
          ],
          "_id": "62ebc0e18a312c984bbda011"
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
              "_id": "62ebc0e18a312c984bbda014"
            }
          ],
          "_id": "62ebc0e18a312c984bbda013"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda016"
            }
          ],
          "_id": "62ebc0e18a312c984bbda015"
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
              "_id": "62ebc0e18a312c984bbda018"
            }
          ],
          "_id": "62ebc0e18a312c984bbda017"
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
              "_id": "62ebc0e18a312c984bbda01a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda019"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbd9ff6",
    "audioID": 791,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 790,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9ff8"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ff9"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbd9ffa"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbd9ffb"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ffc"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbd9ffd"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbd9ffe"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbd9fff"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda000"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda001"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda002"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbd9ff7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 791,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda004"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda005"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda006"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda007"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda008"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda009"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda00a"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda00b"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda00c"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda00d"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda00e"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda003"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "792",
        "name": "Phan Thị Dạ",
        "cty": "ABC",
        "hotline": "63637001"
      },
      "customer": {
        "customerID": "792",
        "name": "Đặng Dương Khánh",
        "phone": "10858777",
        "address": "Hà Nội",
        "cmnd": "10038283"
      },
      "fileURL": "talk792.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "318s",
      "date": "19/1/2022",
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
              "_id": "62ebc0e18a312c984bbda035"
            }
          ],
          "_id": "62ebc0e18a312c984bbda034"
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
              "_id": "62ebc0e18a312c984bbda037"
            }
          ],
          "_id": "62ebc0e18a312c984bbda036"
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
              "_id": "62ebc0e18a312c984bbda039"
            }
          ],
          "_id": "62ebc0e18a312c984bbda038"
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
              "_id": "62ebc0e18a312c984bbda03b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda03a"
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
              "_id": "62ebc0e18a312c984bbda03d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda03c"
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
              "_id": "62ebc0e18a312c984bbda03f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda03e"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda01b",
    "audioID": 792,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 791,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda01d"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda01e"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda01f"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda020"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda021"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda022"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda023"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda024"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda025"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda026"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda027"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda01c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 792,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda029"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda02a"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda02b"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda02c"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda02d"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda02e"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda02f"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda030"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda031"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda032"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda033"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda028"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "793",
        "name": "Huỳnh Văn Quyền",
        "cty": "ABC",
        "hotline": "30169599"
      },
      "customer": {
        "customerID": "793",
        "name": "Phan Quốc An",
        "phone": "23980111",
        "address": "Hà Nội",
        "cmnd": "70863415"
      },
      "fileURL": "talk793.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "159s",
      "date": "2/12/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e18a312c984bbda05a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda059"
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
              "_id": "62ebc0e18a312c984bbda05c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda05b"
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
              "_id": "62ebc0e18a312c984bbda05e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda05d"
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
              "_id": "62ebc0e18a312c984bbda060"
            }
          ],
          "_id": "62ebc0e18a312c984bbda05f"
        },
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
              "_id": "62ebc0e18a312c984bbda062"
            }
          ],
          "_id": "62ebc0e18a312c984bbda061"
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
              "_id": "62ebc0e18a312c984bbda064"
            }
          ],
          "_id": "62ebc0e18a312c984bbda063"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda040",
    "audioID": 793,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 792,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda042"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda043"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda044"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda045"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda046"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda047"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda048"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda049"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda04a"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda04b"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda04c"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda041"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 793,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda04e"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda04f"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda050"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda051"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda052"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda053"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda054"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda055"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda056"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda057"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda058"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda04d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "794",
        "name": "Trần Hải Hồng",
        "cty": "ABC",
        "hotline": "43713692"
      },
      "customer": {
        "customerID": "794",
        "name": "Đặng Văn An",
        "phone": "83086891",
        "address": "Hà Nội",
        "cmnd": "63724059"
      },
      "fileURL": "talk794.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "222s",
      "date": "8/1/2022",
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
              "_id": "62ebc0e18a312c984bbda07f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda07e"
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
              "_id": "62ebc0e18a312c984bbda081"
            }
          ],
          "_id": "62ebc0e18a312c984bbda080"
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
              "_id": "62ebc0e18a312c984bbda083"
            }
          ],
          "_id": "62ebc0e18a312c984bbda082"
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
              "_id": "62ebc0e18a312c984bbda085"
            }
          ],
          "_id": "62ebc0e18a312c984bbda084"
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
              "_id": "62ebc0e18a312c984bbda087"
            }
          ],
          "_id": "62ebc0e18a312c984bbda086"
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
              "_id": "62ebc0e18a312c984bbda089"
            }
          ],
          "_id": "62ebc0e18a312c984bbda088"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda065",
    "audioID": 794,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 793,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda067"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda068"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda069"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda06a"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda06b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda06c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda06d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda06e"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda06f"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda070"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda071"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda066"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 794,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda073"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda074"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda075"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda076"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda077"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda078"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda079"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda07a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda07b"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda07c"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda07d"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda072"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "795",
        "name": "Huỳnh Thị Quyền",
        "cty": "ABC",
        "hotline": "63140258"
      },
      "customer": {
        "customerID": "795",
        "name": "Đặng Minh Quyền",
        "phone": "23338737",
        "address": "Hà Nội",
        "cmnd": "41741297"
      },
      "fileURL": "talk795.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "309s",
      "date": "15/10/2022",
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
              "_id": "62ebc0e18a312c984bbda0a4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0a3"
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
              "_id": "62ebc0e18a312c984bbda0a6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0a5"
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
              "_id": "62ebc0e18a312c984bbda0a8"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0a7"
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
              "_id": "62ebc0e18a312c984bbda0aa"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0a9"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda0ac"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0ab"
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
              "_id": "62ebc0e18a312c984bbda0ae"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0ad"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda08a",
    "audioID": 795,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 794,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda08c"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda08d"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda08e"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda08f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda090"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda091"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda092"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda093"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda094"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda095"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda096"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda08b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 795,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda098"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda099"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda09a"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda09b"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda09c"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda09d"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda09e"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda09f"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda0a0"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda0a1"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda0a2"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda097"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "796",
        "name": "Huỳnh Hải Thái Qúy",
        "cty": "ABC",
        "hotline": "47709754"
      },
      "customer": {
        "customerID": "796",
        "name": "Phạm An Hồng",
        "phone": "11282595",
        "address": "Hà Nội",
        "cmnd": "74571713"
      },
      "fileURL": "talk796.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "484s",
      "date": "9/9/2022",
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
              "_id": "62ebc0e18a312c984bbda0c9"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0c8"
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
              "_id": "62ebc0e18a312c984bbda0cb"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0ca"
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
              "_id": "62ebc0e18a312c984bbda0cd"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0cc"
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
              "_id": "62ebc0e18a312c984bbda0cf"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0ce"
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
              "_id": "62ebc0e18a312c984bbda0d1"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0d0"
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
              "_id": "62ebc0e18a312c984bbda0d3"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0d2"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda0af",
    "audioID": 796,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 795,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda0b1"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda0b2"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda0b3"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda0b4"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda0b5"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda0b6"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda0b7"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda0b8"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda0b9"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda0ba"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda0bb"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda0b0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 796,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda0bd"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda0be"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda0bf"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda0c0"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda0c1"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda0c2"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda0c3"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda0c4"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda0c5"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda0c6"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda0c7"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda0bc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "797",
        "name": "Bùi Quốc Dạ",
        "cty": "ABC",
        "hotline": "27640021"
      },
      "customer": {
        "customerID": "797",
        "name": "Trần Thị Lợi",
        "phone": "93568073",
        "address": "Hà Nội",
        "cmnd": "84242142"
      },
      "fileURL": "talk797.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "315s",
      "date": "15/5/2022",
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
              "_id": "62ebc0e18a312c984bbda0ee"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0ed"
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
              "_id": "62ebc0e18a312c984bbda0f0"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0ef"
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
              "_id": "62ebc0e18a312c984bbda0f2"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0f1"
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
              "_id": "62ebc0e18a312c984bbda0f4"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0f3"
        },
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
              "_id": "62ebc0e18a312c984bbda0f6"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0f5"
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
              "_id": "62ebc0e18a312c984bbda0f8"
            }
          ],
          "_id": "62ebc0e18a312c984bbda0f7"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda0d4",
    "audioID": 797,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 796,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda0d6"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda0d7"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda0d8"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda0d9"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda0da"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda0db"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda0dc"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda0dd"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda0de"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda0df"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda0e0"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda0d5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 797,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda0e2"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda0e3"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda0e4"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda0e5"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda0e6"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda0e7"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda0e8"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda0e9"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda0ea"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda0eb"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda0ec"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda0e1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "798",
        "name": "Trần Phương Hồng",
        "cty": "ABC",
        "hotline": "40227754"
      },
      "customer": {
        "customerID": "798",
        "name": "Trương Minh Thái Qúy",
        "phone": "64645107",
        "address": "Hà Nội",
        "cmnd": "22119962"
      },
      "fileURL": "talk798.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "464s",
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
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e18a312c984bbda113"
            }
          ],
          "_id": "62ebc0e18a312c984bbda112"
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
              "_id": "62ebc0e18a312c984bbda115"
            }
          ],
          "_id": "62ebc0e18a312c984bbda114"
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
              "_id": "62ebc0e18a312c984bbda117"
            }
          ],
          "_id": "62ebc0e18a312c984bbda116"
        },
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
              "_id": "62ebc0e18a312c984bbda119"
            }
          ],
          "_id": "62ebc0e18a312c984bbda118"
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
              "_id": "62ebc0e18a312c984bbda11b"
            }
          ],
          "_id": "62ebc0e18a312c984bbda11a"
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
              "_id": "62ebc0e18a312c984bbda11d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda11c"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda0f9",
    "audioID": 798,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 797,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda0fb"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda0fc"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda0fd"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda0fe"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda0ff"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda100"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda101"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda102"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda103"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda104"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda105"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda0fa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 798,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda107"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda108"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda109"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda10a"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda10b"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda10c"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda10d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda10e"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda10f"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda110"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda111"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda106"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "799",
        "name": "Bùi Hải Duy",
        "cty": "ABC",
        "hotline": "29748265"
      },
      "customer": {
        "customerID": "799",
        "name": "Bùi Văn An",
        "phone": "90221300",
        "address": "Hà Nội",
        "cmnd": "40190726"
      },
      "fileURL": "talk799.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "366s",
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
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e18a312c984bbda138"
            }
          ],
          "_id": "62ebc0e18a312c984bbda137"
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
              "_id": "62ebc0e18a312c984bbda13a"
            }
          ],
          "_id": "62ebc0e18a312c984bbda139"
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
              "_id": "62ebc0e18a312c984bbda13c"
            }
          ],
          "_id": "62ebc0e18a312c984bbda13b"
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
              "_id": "62ebc0e18a312c984bbda13e"
            }
          ],
          "_id": "62ebc0e18a312c984bbda13d"
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
              "_id": "62ebc0e18a312c984bbda140"
            }
          ],
          "_id": "62ebc0e18a312c984bbda13f"
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
              "_id": "62ebc0e18a312c984bbda142"
            }
          ],
          "_id": "62ebc0e18a312c984bbda141"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda11e",
    "audioID": 799,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 798,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda120"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda121"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda122"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda123"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda124"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda125"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda126"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda127"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda128"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda129"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda12a"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda11f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 799,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda12c"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda12d"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda12e"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda12f"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda130"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda131"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda132"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda133"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda134"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda135"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e18a312c984bbda136"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda12b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "800",
        "name": "Ngô Hải An",
        "cty": "ABC",
        "hotline": "23602559"
      },
      "customer": {
        "customerID": "800",
        "name": "Bùi Văn Duy",
        "phone": "40288634",
        "address": "Hà Nội",
        "cmnd": "43506621"
      },
      "fileURL": "talk800.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "319s",
      "date": "18/11/2022",
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
              "_id": "62ebc0e18a312c984bbda15d"
            }
          ],
          "_id": "62ebc0e18a312c984bbda15c"
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
              "_id": "62ebc0e18a312c984bbda15f"
            }
          ],
          "_id": "62ebc0e18a312c984bbda15e"
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
              "_id": "62ebc0e18a312c984bbda161"
            }
          ],
          "_id": "62ebc0e18a312c984bbda160"
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
              "_id": "62ebc0e18a312c984bbda163"
            }
          ],
          "_id": "62ebc0e18a312c984bbda162"
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
              "_id": "62ebc0e18a312c984bbda165"
            }
          ],
          "_id": "62ebc0e18a312c984bbda164"
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
              "_id": "62ebc0e18a312c984bbda167"
            }
          ],
          "_id": "62ebc0e18a312c984bbda166"
        }
      ]
    },
    "_id": "62ebc0e18a312c984bbda143",
    "audioID": 800,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 799,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda145"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e18a312c984bbda146"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda147"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda148"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda149"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda14a"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda14b"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda14c"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda14d"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda14e"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda14f"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda144"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 800,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e18a312c984bbda151"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e18a312c984bbda152"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda153"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e18a312c984bbda154"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda155"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda156"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e18a312c984bbda157"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e18a312c984bbda158"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e18a312c984bbda159"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e18a312c984bbda15a"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e18a312c984bbda15b"
            }
          ]
        },
        "_id": "62ebc0e18a312c984bbda150"
      }
    ],
    "__v": 0
  }
]
export default FILE8