// 20220804202254
// http://localhost:5000/

const FILE3 = [
  {
    "audioCredit": {
      "agent": {
        "agentID": "201",
        "name": "Phan An Ánh",
        "cty": "ABC",
        "hotline": "19429140"
      },
      "customer": {
        "customerID": "201",
        "name": "Phan Hải Dạ",
        "phone": "48035793",
        "address": "Hà Nội",
        "cmnd": "47410280"
      },
      "fileURL": "talk201.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "374s",
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
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4aca"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ac9"
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
              "_id": "62ebc0df8a312c984bbd4acc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4acb"
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
              "_id": "62ebc0df8a312c984bbd4ace"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4acd"
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
              "_id": "62ebc0df8a312c984bbd4ad0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4acf"
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
              "_id": "62ebc0df8a312c984bbd4ad2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ad1"
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
              "_id": "62ebc0df8a312c984bbd4ad4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ad3"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4ab0",
    "audioID": 201,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 200,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ab2"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ab3"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ab4"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ab5"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ab6"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ab7"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ab8"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ab9"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4aba"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4abb"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4abc"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ab1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 201,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4abe"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4abf"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ac0"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ac1"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4ac2"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ac3"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4ac4"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4ac5"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ac6"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ac7"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4ac8"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4abd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "202",
        "name": "Phan Minh An",
        "cty": "ABC",
        "hotline": "64994023"
      },
      "customer": {
        "customerID": "202",
        "name": "Trương An Thái Qúy",
        "phone": "64930077",
        "address": "Hà Nội",
        "cmnd": "27650579"
      },
      "fileURL": "talk202.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "466s",
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
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4aef"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4aee"
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
              "_id": "62ebc0df8a312c984bbd4af1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4af0"
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
              "_id": "62ebc0df8a312c984bbd4af3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4af2"
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
              "_id": "62ebc0df8a312c984bbd4af5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4af4"
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
              "_id": "62ebc0df8a312c984bbd4af7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4af6"
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
              "_id": "62ebc0df8a312c984bbd4af9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4af8"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4ad5",
    "audioID": 202,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 201,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ad7"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ad8"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ad9"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ada"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4adb"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4adc"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4add"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ade"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4adf"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ae0"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ae1"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ad6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 202,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ae3"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ae4"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ae5"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ae6"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ae7"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ae8"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ae9"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4aea"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4aeb"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4aec"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4aed"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ae2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "203",
        "name": "Phan Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "15836849"
      },
      "customer": {
        "customerID": "203",
        "name": "Huỳnh Khánh Khánh",
        "phone": "88163731",
        "address": "Hà Nội",
        "cmnd": "73368863"
      },
      "fileURL": "talk203.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "99s",
      "date": "30/4/2022",
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
              "_id": "62ebc0df8a312c984bbd4b14"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b13"
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
              "_id": "62ebc0df8a312c984bbd4b16"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b15"
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
              "_id": "62ebc0df8a312c984bbd4b18"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b17"
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
              "_id": "62ebc0df8a312c984bbd4b1a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b19"
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
              "_id": "62ebc0df8a312c984bbd4b1c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b1b"
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
              "_id": "62ebc0df8a312c984bbd4b1e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b1d"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4afa",
    "audioID": 203,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 202,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4afc"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4afd"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4afe"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4aff"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b00"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b01"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b02"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4b03"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4b04"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b05"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b06"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4afb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 203,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b08"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4b09"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b0a"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b0b"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4b0c"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4b0d"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b0e"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4b0f"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4b10"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b11"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4b12"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4b07"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "204",
        "name": "Lê An Duy",
        "cty": "ABC",
        "hotline": "99187324"
      },
      "customer": {
        "customerID": "204",
        "name": "Phạm An Cảnh",
        "phone": "34670104",
        "address": "Hà Nội",
        "cmnd": "37430342"
      },
      "fileURL": "talk204.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "562s",
      "date": "10/12/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4b39"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b38"
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
              "_id": "62ebc0df8a312c984bbd4b3b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b3a"
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
              "_id": "62ebc0df8a312c984bbd4b3d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b3c"
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
              "_id": "62ebc0df8a312c984bbd4b3f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b3e"
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
              "_id": "62ebc0df8a312c984bbd4b41"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b40"
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
              "_id": "62ebc0df8a312c984bbd4b43"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b42"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4b1f",
    "audioID": 204,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 203,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b21"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b22"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b23"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b24"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b25"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b26"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4b27"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b28"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b29"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b2a"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b2b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4b20"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 204,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4b2d"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4b2e"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4b2f"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b30"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b31"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b32"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4b33"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b34"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b35"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4b36"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b37"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4b2c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "205",
        "name": "Nguyễn Quốc Thái Qúy",
        "cty": "ABC",
        "hotline": "64566168"
      },
      "customer": {
        "customerID": "205",
        "name": "Nguyễn Minh Quyền",
        "phone": "37140039",
        "address": "Hà Nội",
        "cmnd": "51142062"
      },
      "fileURL": "talk205.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "579s",
      "date": "28/8/2022",
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
              "_id": "62ebc0df8a312c984bbd4b5e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b5d"
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
              "_id": "62ebc0df8a312c984bbd4b60"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b5f"
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
              "_id": "62ebc0df8a312c984bbd4b62"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b61"
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
              "_id": "62ebc0df8a312c984bbd4b64"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b63"
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
              "_id": "62ebc0df8a312c984bbd4b66"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b65"
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
              "_id": "62ebc0df8a312c984bbd4b68"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b67"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4b44",
    "audioID": 205,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 204,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b46"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b47"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4b48"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4b49"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b4a"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b4b"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b4c"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b4d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4b4e"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4b4f"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4b50"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4b45"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 205,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b52"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b53"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4b54"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4b55"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b56"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4b57"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b58"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b59"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4b5a"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b5b"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4b5c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4b51"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "206",
        "name": "Nguyễn Dương Ánh",
        "cty": "ABC",
        "hotline": "72796515"
      },
      "customer": {
        "customerID": "206",
        "name": "Lê Thị Duy",
        "phone": "76538981",
        "address": "Hà Nội",
        "cmnd": "74280432"
      },
      "fileURL": "talk206.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "125s",
      "date": "30/3/2022",
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
              "_id": "62ebc0df8a312c984bbd4b83"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b82"
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
              "_id": "62ebc0df8a312c984bbd4b85"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b84"
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
              "_id": "62ebc0df8a312c984bbd4b87"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b86"
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
              "_id": "62ebc0df8a312c984bbd4b89"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b88"
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
              "_id": "62ebc0df8a312c984bbd4b8b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b8a"
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
              "_id": "62ebc0df8a312c984bbd4b8d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4b8c"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4b69",
    "audioID": 206,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 205,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4b6b"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4b6c"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b6d"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b6e"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b6f"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b70"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4b71"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4b72"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b73"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b74"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4b75"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4b6a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 206,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b77"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b78"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4b79"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4b7a"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4b7b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b7c"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b7d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b7e"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4b7f"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4b80"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4b81"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4b76"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "207",
        "name": "Bùi Hải Quyền",
        "cty": "ABC",
        "hotline": "71058361"
      },
      "customer": {
        "customerID": "207",
        "name": "Đặng Hải Cảnh",
        "phone": "70845663",
        "address": "Hà Nội",
        "cmnd": "30530847"
      },
      "fileURL": "talk207.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "284s",
      "date": "9/2/2022",
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
              "_id": "62ebc0df8a312c984bbd4ba8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ba7"
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
              "_id": "62ebc0df8a312c984bbd4baa"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ba9"
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
              "_id": "62ebc0df8a312c984bbd4bac"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bab"
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
              "_id": "62ebc0df8a312c984bbd4bae"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bad"
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
              "_id": "62ebc0df8a312c984bbd4bb0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4baf"
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
              "_id": "62ebc0df8a312c984bbd4bb2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bb1"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4b8e",
    "audioID": 207,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 206,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4b90"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b91"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4b92"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b93"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4b94"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4b95"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b96"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4b97"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b98"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b99"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4b9a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4b8f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 207,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4b9c"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4b9d"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4b9e"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4b9f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ba0"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ba1"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ba2"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ba3"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4ba4"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ba5"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ba6"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4b9b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "208",
        "name": "Bùi Minh Ánh",
        "cty": "ABC",
        "hotline": "66989401"
      },
      "customer": {
        "customerID": "208",
        "name": "Ngô Phương Duy",
        "phone": "99429884",
        "address": "Hà Nội",
        "cmnd": "56934751"
      },
      "fileURL": "talk208.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "596s",
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
                "tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4bcd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bcc"
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
              "_id": "62ebc0df8a312c984bbd4bcf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bce"
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
              "_id": "62ebc0df8a312c984bbd4bd1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bd0"
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
              "_id": "62ebc0df8a312c984bbd4bd3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bd2"
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
              "_id": "62ebc0df8a312c984bbd4bd5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bd4"
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
              "_id": "62ebc0df8a312c984bbd4bd7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bd6"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4bb3",
    "audioID": 208,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 207,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4bb5"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4bb6"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4bb7"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4bb8"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4bb9"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4bba"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4bbb"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4bbc"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4bbd"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4bbe"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4bbf"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4bb4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 208,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4bc1"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4bc2"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4bc3"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4bc4"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4bc5"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4bc6"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4bc7"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4bc8"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4bc9"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4bca"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4bcb"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4bc0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "209",
        "name": "Trần Quốc Hồng",
        "cty": "ABC",
        "hotline": "21666423"
      },
      "customer": {
        "customerID": "209",
        "name": "Phạm Minh Quyền",
        "phone": "75026601",
        "address": "Hà Nội",
        "cmnd": "10901905"
      },
      "fileURL": "talk209.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "20s",
      "date": "22/8/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4bf2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bf1"
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
              "_id": "62ebc0df8a312c984bbd4bf4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bf3"
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
              "_id": "62ebc0df8a312c984bbd4bf6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bf5"
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
              "_id": "62ebc0df8a312c984bbd4bf8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bf7"
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
              "_id": "62ebc0df8a312c984bbd4bfa"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bf9"
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
              "_id": "62ebc0df8a312c984bbd4bfc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4bfb"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4bd8",
    "audioID": 209,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 208,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4bda"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4bdb"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4bdc"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4bdd"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4bde"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4bdf"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4be0"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4be1"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4be2"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4be3"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4be4"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4bd9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 209,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4be6"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4be7"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4be8"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4be9"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4bea"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4beb"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4bec"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4bed"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4bee"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4bef"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4bf0"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4be5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "210",
        "name": "Trần Văn Quyền",
        "cty": "ABC",
        "hotline": "92740174"
      },
      "customer": {
        "customerID": "210",
        "name": "Phạm An Khánh",
        "phone": "47622648",
        "address": "Hà Nội",
        "cmnd": "27733146"
      },
      "fileURL": "talk210.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "383s",
      "date": "7/9/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4c17"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c16"
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
              "_id": "62ebc0df8a312c984bbd4c19"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c18"
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
              "_id": "62ebc0df8a312c984bbd4c1b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c1a"
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
              "_id": "62ebc0df8a312c984bbd4c1d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c1c"
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
              "_id": "62ebc0df8a312c984bbd4c1f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c1e"
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
              "_id": "62ebc0df8a312c984bbd4c21"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c20"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4bfd",
    "audioID": 210,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 209,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4bff"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c00"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4c01"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4c02"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4c03"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c04"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c05"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4c06"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c07"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4c08"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c09"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4bfe"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 210,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4c0b"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4c0c"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4c0d"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4c0e"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4c0f"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c10"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4c11"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4c12"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c13"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4c14"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c15"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4c0a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "211",
        "name": "Trương Quốc Ánh",
        "cty": "ABC",
        "hotline": "53882710"
      },
      "customer": {
        "customerID": "211",
        "name": "Huỳnh Khánh Dạ",
        "phone": "95355359",
        "address": "Hà Nội",
        "cmnd": "18100508"
      },
      "fileURL": "talk211.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "23s",
      "date": "26/7/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4c3c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c3b"
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
              "_id": "62ebc0df8a312c984bbd4c3e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c3d"
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
              "_id": "62ebc0df8a312c984bbd4c40"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c3f"
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
              "_id": "62ebc0df8a312c984bbd4c42"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c41"
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
              "_id": "62ebc0df8a312c984bbd4c44"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c43"
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
              "_id": "62ebc0df8a312c984bbd4c46"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c45"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4c22",
    "audioID": 211,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 210,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4c24"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c25"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c26"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4c27"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4c28"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c29"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c2a"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4c2b"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4c2c"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4c2d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c2e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4c23"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 211,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c30"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4c31"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c32"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c33"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c34"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4c35"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c36"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4c37"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c38"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c39"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c3a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4c2f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "212",
        "name": "Lê Quốc Lợi",
        "cty": "ABC",
        "hotline": "57654313"
      },
      "customer": {
        "customerID": "212",
        "name": "Nguyễn Hải Khánh",
        "phone": "54120807",
        "address": "Hà Nội",
        "cmnd": "93702867"
      },
      "fileURL": "talk212.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "586s",
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
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4c61"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c60"
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
              "_id": "62ebc0df8a312c984bbd4c63"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c62"
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
              "_id": "62ebc0df8a312c984bbd4c65"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c64"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4c67"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c66"
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
              "_id": "62ebc0df8a312c984bbd4c69"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c68"
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
              "_id": "62ebc0df8a312c984bbd4c6b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c6a"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4c47",
    "audioID": 212,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 211,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c49"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4c4a"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c4b"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c4c"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4c4d"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4c4e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4c4f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c50"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c51"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c52"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c53"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4c48"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 212,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c55"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4c56"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c57"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c58"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4c59"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4c5a"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4c5b"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4c5c"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c5d"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4c5e"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c5f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4c54"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "213",
        "name": "Trần Khánh Lợi",
        "cty": "ABC",
        "hotline": "58624797"
      },
      "customer": {
        "customerID": "213",
        "name": "Phạm Dương Thái Qúy",
        "phone": "90739936",
        "address": "Hà Nội",
        "cmnd": "59662115"
      },
      "fileURL": "talk213.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "468s",
      "date": "11/6/2022",
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
              "_id": "62ebc0df8a312c984bbd4c86"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c85"
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
              "_id": "62ebc0df8a312c984bbd4c88"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c87"
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
              "_id": "62ebc0df8a312c984bbd4c8a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c89"
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
              "_id": "62ebc0df8a312c984bbd4c8c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c8b"
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
              "_id": "62ebc0df8a312c984bbd4c8e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c8d"
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
              "_id": "62ebc0df8a312c984bbd4c90"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4c8f"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4c6c",
    "audioID": 213,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 212,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4c6e"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c6f"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4c70"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4c71"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4c72"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c73"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c74"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4c75"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4c76"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c77"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4c78"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4c6d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 213,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4c7a"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4c7b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4c7c"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c7d"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4c7e"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4c7f"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4c80"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4c81"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c82"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4c83"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c84"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4c79"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "214",
        "name": "Phạm Phương Cảnh",
        "cty": "ABC",
        "hotline": "27691871"
      },
      "customer": {
        "customerID": "214",
        "name": "Phan Khánh An",
        "phone": "96279126",
        "address": "Hà Nội",
        "cmnd": "30378467"
      },
      "fileURL": "talk214.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "480s",
      "date": "10/7/2022",
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
              "_id": "62ebc0df8a312c984bbd4cab"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4caa"
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
              "_id": "62ebc0df8a312c984bbd4cad"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cac"
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
              "_id": "62ebc0df8a312c984bbd4caf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cae"
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
              "_id": "62ebc0df8a312c984bbd4cb1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cb0"
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
              "_id": "62ebc0df8a312c984bbd4cb3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cb2"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4cb5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cb4"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4c91",
    "audioID": 214,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 213,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c93"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c94"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4c95"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c96"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4c97"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4c98"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c99"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4c9a"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c9b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4c9c"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c9d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4c92"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 214,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4c9f"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ca0"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ca1"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ca2"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ca3"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ca4"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4ca5"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4ca6"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ca7"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4ca8"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ca9"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4c9e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "215",
        "name": "Ngô Dương Duy",
        "cty": "ABC",
        "hotline": "51535897"
      },
      "customer": {
        "customerID": "215",
        "name": "Phan Dương Quyền",
        "phone": "44304249",
        "address": "Hà Nội",
        "cmnd": "71580995"
      },
      "fileURL": "talk215.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "34s",
      "date": "29/9/2022",
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
              "_id": "62ebc0df8a312c984bbd4cd0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ccf"
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
              "_id": "62ebc0df8a312c984bbd4cd2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cd1"
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
              "_id": "62ebc0df8a312c984bbd4cd4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cd3"
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
              "_id": "62ebc0df8a312c984bbd4cd6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cd5"
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
              "_id": "62ebc0df8a312c984bbd4cd8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cd7"
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
              "_id": "62ebc0df8a312c984bbd4cda"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cd9"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4cb6",
    "audioID": 215,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 214,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4cb8"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4cb9"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4cba"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4cbb"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4cbc"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4cbd"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4cbe"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4cbf"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4cc0"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4cc1"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4cc2"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4cb7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 215,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4cc4"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4cc5"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4cc6"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4cc7"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4cc8"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4cc9"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4cca"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ccb"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ccc"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ccd"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4cce"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4cc3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "216",
        "name": "Trương Minh Quyền",
        "cty": "ABC",
        "hotline": "38827170"
      },
      "customer": {
        "customerID": "216",
        "name": "Phan Hải Hồng",
        "phone": "38835816",
        "address": "Hà Nội",
        "cmnd": "64973182"
      },
      "fileURL": "talk216.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "50s",
      "date": "9/2/2022",
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
              "_id": "62ebc0df8a312c984bbd4cf5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cf4"
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
              "_id": "62ebc0df8a312c984bbd4cf7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cf6"
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
              "_id": "62ebc0df8a312c984bbd4cf9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cf8"
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
              "_id": "62ebc0df8a312c984bbd4cfb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cfa"
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
              "_id": "62ebc0df8a312c984bbd4cfd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cfc"
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
              "_id": "62ebc0df8a312c984bbd4cff"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4cfe"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4cdb",
    "audioID": 216,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 215,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4cdd"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4cde"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4cdf"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ce0"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4ce1"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4ce2"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ce3"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ce4"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ce5"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4ce6"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4ce7"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4cdc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 216,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ce9"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4cea"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ceb"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4cec"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ced"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4cee"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4cef"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4cf0"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4cf1"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4cf2"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4cf3"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ce8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "217",
        "name": "Đặng Phương Dạ",
        "cty": "ABC",
        "hotline": "89684105"
      },
      "customer": {
        "customerID": "217",
        "name": "Bùi Khánh Cảnh",
        "phone": "16942450",
        "address": "Hà Nội",
        "cmnd": "50131944"
      },
      "fileURL": "talk217.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "539s",
      "date": "29/8/2022",
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
              "_id": "62ebc0df8a312c984bbd4d1a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d19"
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
              "_id": "62ebc0df8a312c984bbd4d1c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d1b"
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
              "_id": "62ebc0df8a312c984bbd4d1e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d1d"
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
              "_id": "62ebc0df8a312c984bbd4d20"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d1f"
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
              "_id": "62ebc0df8a312c984bbd4d22"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d21"
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
              "_id": "62ebc0df8a312c984bbd4d24"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d23"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4d00",
    "audioID": 217,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 216,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4d02"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d03"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d04"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d05"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4d06"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d07"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4d08"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4d09"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4d0a"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d0b"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d0c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4d01"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 217,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d0e"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4d0f"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d10"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4d11"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d12"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d13"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4d14"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d15"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d16"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d17"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4d18"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4d0d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "218",
        "name": "Trần Minh Khánh",
        "cty": "ABC",
        "hotline": "18432438"
      },
      "customer": {
        "customerID": "218",
        "name": "Nguyễn An Thái Qúy",
        "phone": "14920370",
        "address": "Hà Nội",
        "cmnd": "41461385"
      },
      "fileURL": "talk218.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "453s",
      "date": "4/8/2022",
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
              "_id": "62ebc0df8a312c984bbd4d3f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d3e"
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
              "_id": "62ebc0df8a312c984bbd4d41"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d40"
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
              "_id": "62ebc0df8a312c984bbd4d43"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d42"
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
              "_id": "62ebc0df8a312c984bbd4d45"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d44"
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
              "_id": "62ebc0df8a312c984bbd4d47"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d46"
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
              "_id": "62ebc0df8a312c984bbd4d49"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d48"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4d25",
    "audioID": 218,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 217,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4d27"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d28"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d29"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4d2a"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4d2b"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4d2c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4d2d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d2e"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4d2f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4d30"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d31"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4d26"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 218,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d33"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d34"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d35"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4d36"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d37"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d38"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4d39"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4d3a"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4d3b"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d3c"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4d3d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4d32"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "219",
        "name": "Đặng Quốc Quyền",
        "cty": "ABC",
        "hotline": "57830421"
      },
      "customer": {
        "customerID": "219",
        "name": "Trương Minh Khánh",
        "phone": "63283926",
        "address": "Hà Nội",
        "cmnd": "46377627"
      },
      "fileURL": "talk219.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "147s",
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
                "số tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4d64"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d63"
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
              "_id": "62ebc0df8a312c984bbd4d66"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d65"
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
              "_id": "62ebc0df8a312c984bbd4d68"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d67"
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
              "_id": "62ebc0df8a312c984bbd4d6a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d69"
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
              "_id": "62ebc0df8a312c984bbd4d6c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d6b"
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
              "_id": "62ebc0df8a312c984bbd4d6e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d6d"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4d4a",
    "audioID": 219,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 218,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d4c"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4d4d"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4d4e"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d4f"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d50"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d51"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4d52"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d53"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4d54"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d55"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4d56"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4d4b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 219,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4d58"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d59"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d5a"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d5b"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d5c"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d5d"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4d5e"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4d5f"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4d60"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4d61"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d62"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4d57"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "220",
        "name": "Phạm Hữu Duy",
        "cty": "ABC",
        "hotline": "70465723"
      },
      "customer": {
        "customerID": "220",
        "name": "Nguyễn Quốc Hồng",
        "phone": "44603696",
        "address": "Hà Nội",
        "cmnd": "85412638"
      },
      "fileURL": "talk220.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "127s",
      "date": "19/3/2022",
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
              "_id": "62ebc0df8a312c984bbd4d89"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d88"
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
              "_id": "62ebc0df8a312c984bbd4d8b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d8a"
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
              "_id": "62ebc0df8a312c984bbd4d8d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d8c"
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
              "_id": "62ebc0df8a312c984bbd4d8f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d8e"
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
              "_id": "62ebc0df8a312c984bbd4d91"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d90"
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
              "_id": "62ebc0df8a312c984bbd4d93"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4d92"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4d6f",
    "audioID": 220,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 219,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d71"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4d72"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4d73"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4d74"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4d75"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d76"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4d77"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d78"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4d79"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d7a"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4d7b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4d70"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 220,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4d7d"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4d7e"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d7f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d80"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d81"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d82"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4d83"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d84"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d85"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4d86"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4d87"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4d7c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "221",
        "name": "Phạm Hữu Cảnh",
        "cty": "ABC",
        "hotline": "99998390"
      },
      "customer": {
        "customerID": "221",
        "name": "Huỳnh Văn Quyền",
        "phone": "27906888",
        "address": "Hà Nội",
        "cmnd": "26025599"
      },
      "fileURL": "talk221.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "115s",
      "date": "28/6/2022",
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
              "_id": "62ebc0df8a312c984bbd4dae"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4dad"
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
              "_id": "62ebc0df8a312c984bbd4db0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4daf"
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
              "_id": "62ebc0df8a312c984bbd4db2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4db1"
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
              "_id": "62ebc0df8a312c984bbd4db4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4db3"
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
              "_id": "62ebc0df8a312c984bbd4db6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4db5"
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
              "_id": "62ebc0df8a312c984bbd4db8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4db7"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4d94",
    "audioID": 221,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 220,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4d96"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d97"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4d98"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d99"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d9a"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4d9b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d9c"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4d9d"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d9e"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4d9f"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4da0"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4d95"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 221,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4da2"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4da3"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4da4"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4da5"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4da6"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4da7"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4da8"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4da9"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4daa"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4dab"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4dac"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4da1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "222",
        "name": "Đặng Hải Dạ",
        "cty": "ABC",
        "hotline": "32500942"
      },
      "customer": {
        "customerID": "222",
        "name": "Huỳnh Minh Thái Qúy",
        "phone": "89540129",
        "address": "Hà Nội",
        "cmnd": "60238210"
      },
      "fileURL": "talk222.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "343s",
      "date": "14/6/2022",
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
              "_id": "62ebc0df8a312c984bbd4dd3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4dd2"
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
              "_id": "62ebc0df8a312c984bbd4dd5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4dd4"
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
              "_id": "62ebc0df8a312c984bbd4dd7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4dd6"
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
              "_id": "62ebc0df8a312c984bbd4dd9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4dd8"
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
              "_id": "62ebc0df8a312c984bbd4ddb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4dda"
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
              "_id": "62ebc0df8a312c984bbd4ddd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ddc"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4db9",
    "audioID": 222,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 221,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4dbb"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4dbc"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4dbd"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4dbe"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4dbf"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4dc0"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4dc1"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4dc2"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4dc3"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4dc4"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4dc5"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4dba"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 222,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4dc7"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4dc8"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4dc9"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4dca"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4dcb"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4dcc"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4dcd"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4dce"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4dcf"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4dd0"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4dd1"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4dc6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "223",
        "name": "Trần Dương Hồng",
        "cty": "ABC",
        "hotline": "61146435"
      },
      "customer": {
        "customerID": "223",
        "name": "Đặng Thị Khánh",
        "phone": "16009025",
        "address": "Hà Nội",
        "cmnd": "57450752"
      },
      "fileURL": "talk223.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "510s",
      "date": "29/5/2022",
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
              "_id": "62ebc0df8a312c984bbd4df8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4df7"
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
              "_id": "62ebc0df8a312c984bbd4dfa"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4df9"
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
              "_id": "62ebc0df8a312c984bbd4dfc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4dfb"
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
              "_id": "62ebc0df8a312c984bbd4dfe"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4dfd"
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
              "_id": "62ebc0df8a312c984bbd4e00"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4dff"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4e02"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e01"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4dde",
    "audioID": 223,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 222,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4de0"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4de1"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4de2"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4de3"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4de4"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4de5"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4de6"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4de7"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4de8"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4de9"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4dea"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ddf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 223,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4dec"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ded"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4dee"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4def"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4df0"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4df1"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4df2"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4df3"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4df4"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4df5"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4df6"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4deb"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "224",
        "name": "Trần Thị An",
        "cty": "ABC",
        "hotline": "42534679"
      },
      "customer": {
        "customerID": "224",
        "name": "Phan Hữu Quyền",
        "phone": "74999123",
        "address": "Hà Nội",
        "cmnd": "80223336"
      },
      "fileURL": "talk224.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "147s",
      "date": "7/4/2022",
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
              "_id": "62ebc0df8a312c984bbd4e1d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e1c"
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
              "_id": "62ebc0df8a312c984bbd4e1f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e1e"
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
              "_id": "62ebc0df8a312c984bbd4e21"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e20"
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
              "_id": "62ebc0df8a312c984bbd4e23"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e22"
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
              "_id": "62ebc0df8a312c984bbd4e25"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e24"
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
              "_id": "62ebc0df8a312c984bbd4e27"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e26"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4e03",
    "audioID": 224,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 223,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e05"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e06"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4e07"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e08"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e09"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4e0a"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e0b"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e0c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e0d"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4e0e"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4e0f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4e04"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 224,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4e11"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e12"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e13"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4e14"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e15"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e16"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4e17"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4e18"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e19"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4e1a"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e1b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4e10"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "225",
        "name": "Ngô An Duy",
        "cty": "ABC",
        "hotline": "39503386"
      },
      "customer": {
        "customerID": "225",
        "name": "Phạm An Khánh",
        "phone": "44306290",
        "address": "Hà Nội",
        "cmnd": "45240849"
      },
      "fileURL": "talk225.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "517s",
      "date": "11/5/2022",
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
              "_id": "62ebc0df8a312c984bbd4e42"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e41"
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
              "_id": "62ebc0df8a312c984bbd4e44"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e43"
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
              "_id": "62ebc0df8a312c984bbd4e46"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e45"
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
              "_id": "62ebc0df8a312c984bbd4e48"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e47"
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
              "_id": "62ebc0df8a312c984bbd4e4a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e49"
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
              "_id": "62ebc0df8a312c984bbd4e4c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e4b"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4e28",
    "audioID": 225,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 224,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e2a"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e2b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4e2c"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e2d"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4e2e"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e2f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e30"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4e31"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4e32"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e33"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4e34"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4e29"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 225,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4e36"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4e37"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e38"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e39"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e3a"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4e3b"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e3c"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e3d"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e3e"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e3f"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4e40"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4e35"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "226",
        "name": "Lê Khánh Duy",
        "cty": "ABC",
        "hotline": "94626087"
      },
      "customer": {
        "customerID": "226",
        "name": "Phan Hữu Ánh",
        "phone": "24615329",
        "address": "Hà Nội",
        "cmnd": "74476924"
      },
      "fileURL": "talk226.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "389s",
      "date": "11/11/2022",
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
              "_id": "62ebc0df8a312c984bbd4e67"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e66"
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
              "_id": "62ebc0df8a312c984bbd4e69"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e68"
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
              "_id": "62ebc0df8a312c984bbd4e6b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e6a"
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
              "_id": "62ebc0df8a312c984bbd4e6d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e6c"
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
              "_id": "62ebc0df8a312c984bbd4e6f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e6e"
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
              "_id": "62ebc0df8a312c984bbd4e71"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e70"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4e4d",
    "audioID": 226,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 225,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4e4f"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e50"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4e51"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e52"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e53"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e54"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e55"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e56"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e57"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e58"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4e59"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4e4e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 226,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4e5b"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4e5c"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e5d"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4e5e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4e5f"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e60"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4e61"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e62"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e63"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4e64"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e65"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4e5a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "227",
        "name": "Bùi Hữu Hồng",
        "cty": "ABC",
        "hotline": "41331518"
      },
      "customer": {
        "customerID": "227",
        "name": "Nguyễn Quốc Quyền",
        "phone": "80110230",
        "address": "Hà Nội",
        "cmnd": "92948355"
      },
      "fileURL": "talk227.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "459s",
      "date": "16/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4e8c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e8b"
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
              "_id": "62ebc0df8a312c984bbd4e8e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e8d"
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
              "_id": "62ebc0df8a312c984bbd4e90"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e8f"
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
              "_id": "62ebc0df8a312c984bbd4e92"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e91"
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
              "_id": "62ebc0df8a312c984bbd4e94"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e93"
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
              "_id": "62ebc0df8a312c984bbd4e96"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4e95"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4e72",
    "audioID": 227,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 226,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e74"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4e75"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e76"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4e77"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e78"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e79"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e7a"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e7b"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e7c"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e7d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4e7e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4e73"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 227,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4e80"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e81"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4e82"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4e83"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e84"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4e85"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e86"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4e87"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4e88"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4e89"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4e8a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4e7f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "228",
        "name": "Lê Văn Ánh",
        "cty": "ABC",
        "hotline": "40969461"
      },
      "customer": {
        "customerID": "228",
        "name": "Phạm An Khánh",
        "phone": "60105969",
        "address": "Hà Nội",
        "cmnd": "81300292"
      },
      "fileURL": "talk228.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "154s",
      "date": "21/5/2022",
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
              "_id": "62ebc0df8a312c984bbd4eb1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4eb0"
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
              "_id": "62ebc0df8a312c984bbd4eb3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4eb2"
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
              "_id": "62ebc0df8a312c984bbd4eb5"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4eb4"
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
              "_id": "62ebc0df8a312c984bbd4eb7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4eb6"
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
              "_id": "62ebc0df8a312c984bbd4eb9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4eb8"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4ebb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4eba"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4e97",
    "audioID": 228,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 227,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4e99"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e9a"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4e9b"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4e9c"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4e9d"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4e9e"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4e9f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ea0"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ea1"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ea2"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4ea3"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4e98"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 228,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ea5"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ea6"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ea7"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ea8"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ea9"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4eaa"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4eab"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4eac"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ead"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4eae"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4eaf"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ea4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "229",
        "name": "Phạm Hữu Quyền",
        "cty": "ABC",
        "hotline": "29599821"
      },
      "customer": {
        "customerID": "229",
        "name": "Phan Thị Cảnh",
        "phone": "70339434",
        "address": "Hà Nội",
        "cmnd": "21029109"
      },
      "fileURL": "talk229.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "271s",
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
              "_id": "62ebc0df8a312c984bbd4ed6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ed5"
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
              "_id": "62ebc0df8a312c984bbd4ed8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ed7"
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
              "_id": "62ebc0df8a312c984bbd4eda"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ed9"
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
              "_id": "62ebc0df8a312c984bbd4edc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4edb"
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
              "_id": "62ebc0df8a312c984bbd4ede"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4edd"
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
              "_id": "62ebc0df8a312c984bbd4ee0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4edf"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4ebc",
    "audioID": 229,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 228,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ebe"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4ebf"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ec0"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ec1"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4ec2"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ec3"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ec4"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ec5"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ec6"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4ec7"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ec8"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ebd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 229,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4eca"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ecb"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4ecc"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ecd"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4ece"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ecf"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ed0"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ed1"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ed2"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ed3"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ed4"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ec9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "230",
        "name": "Phạm Thị Hồng",
        "cty": "ABC",
        "hotline": "76873498"
      },
      "customer": {
        "customerID": "230",
        "name": "Trần Văn Khánh",
        "phone": "76562528",
        "address": "Hà Nội",
        "cmnd": "36553885"
      },
      "fileURL": "talk230.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "135s",
      "date": "9/12/2022",
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
              "_id": "62ebc0df8a312c984bbd4efb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4efa"
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
              "_id": "62ebc0df8a312c984bbd4efd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4efc"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4eff"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4efe"
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
              "_id": "62ebc0df8a312c984bbd4f01"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f00"
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
              "_id": "62ebc0df8a312c984bbd4f03"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f02"
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
              "_id": "62ebc0df8a312c984bbd4f05"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f04"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4ee1",
    "audioID": 230,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 229,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ee3"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ee4"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ee5"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4ee6"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4ee7"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ee8"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ee9"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4eea"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4eeb"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4eec"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4eed"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ee2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 230,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4eef"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ef0"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ef1"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4ef2"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ef3"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4ef4"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4ef5"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ef6"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ef7"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4ef8"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ef9"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4eee"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "231",
        "name": "Bùi Hữu Dạ",
        "cty": "ABC",
        "hotline": "68489863"
      },
      "customer": {
        "customerID": "231",
        "name": "Phan Hữu Quyền",
        "phone": "10748636",
        "address": "Hà Nội",
        "cmnd": "61852491"
      },
      "fileURL": "talk231.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "457s",
      "date": "27/3/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4f20"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f1f"
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
              "_id": "62ebc0df8a312c984bbd4f22"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f21"
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
              "_id": "62ebc0df8a312c984bbd4f24"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f23"
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
              "_id": "62ebc0df8a312c984bbd4f26"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f25"
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
              "_id": "62ebc0df8a312c984bbd4f28"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f27"
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
              "_id": "62ebc0df8a312c984bbd4f2a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f29"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4f06",
    "audioID": 231,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 230,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f08"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4f09"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f0a"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f0b"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f0c"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4f0d"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f0e"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f0f"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4f10"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f11"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4f12"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4f07"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 231,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f14"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4f15"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f16"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f17"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f18"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f19"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4f1a"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f1b"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f1c"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4f1d"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4f1e"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4f13"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "232",
        "name": "Ngô Thị Dạ",
        "cty": "ABC",
        "hotline": "72903816"
      },
      "customer": {
        "customerID": "232",
        "name": "Phạm Khánh Cảnh",
        "phone": "32393109",
        "address": "Hà Nội",
        "cmnd": "48344688"
      },
      "fileURL": "talk232.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "303s",
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
              "_id": "62ebc0df8a312c984bbd4f45"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f44"
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
              "_id": "62ebc0df8a312c984bbd4f47"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f46"
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
              "_id": "62ebc0df8a312c984bbd4f49"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f48"
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
              "_id": "62ebc0df8a312c984bbd4f4b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f4a"
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
              "_id": "62ebc0df8a312c984bbd4f4d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f4c"
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
              "_id": "62ebc0df8a312c984bbd4f4f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f4e"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4f2b",
    "audioID": 232,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 231,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4f2d"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f2e"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f2f"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4f30"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f31"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f32"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f33"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4f34"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4f35"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f36"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f37"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4f2c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 232,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4f39"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4f3a"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f3b"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f3c"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f3d"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f3e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4f3f"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4f40"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f41"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4f42"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f43"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4f38"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "233",
        "name": "Huỳnh Khánh Cảnh",
        "cty": "ABC",
        "hotline": "10274007"
      },
      "customer": {
        "customerID": "233",
        "name": "Đặng Quốc Cảnh",
        "phone": "35967093",
        "address": "Hà Nội",
        "cmnd": "96390770"
      },
      "fileURL": "talk233.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "545s",
      "date": "20/10/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4f6a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f69"
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
              "_id": "62ebc0df8a312c984bbd4f6c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f6b"
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
              "_id": "62ebc0df8a312c984bbd4f6e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f6d"
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
              "_id": "62ebc0df8a312c984bbd4f70"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f6f"
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
              "_id": "62ebc0df8a312c984bbd4f72"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f71"
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
              "_id": "62ebc0df8a312c984bbd4f74"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f73"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4f50",
    "audioID": 233,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 232,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4f52"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f53"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4f54"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f55"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f56"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f57"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f58"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4f59"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4f5a"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f5b"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f5c"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4f51"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 233,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f5e"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f5f"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f60"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f61"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4f62"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4f63"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4f64"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f65"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f66"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4f67"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4f68"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4f5d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "234",
        "name": "Huỳnh An Thái Qúy",
        "cty": "ABC",
        "hotline": "60302977"
      },
      "customer": {
        "customerID": "234",
        "name": "Trần Dương An",
        "phone": "67129121",
        "address": "Hà Nội",
        "cmnd": "65664978"
      },
      "fileURL": "talk234.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "370s",
      "date": "15/5/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0df8a312c984bbd4f8f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f8e"
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
              "_id": "62ebc0df8a312c984bbd4f91"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f90"
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
              "_id": "62ebc0df8a312c984bbd4f93"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f92"
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
              "_id": "62ebc0df8a312c984bbd4f95"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f94"
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
              "_id": "62ebc0df8a312c984bbd4f97"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f96"
        },
        {
          "name": "Agnt_ConfirmedDueAmnt",
          "key": [
            {
              "agent": [
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd4f99"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4f98"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4f75",
    "audioID": 234,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 233,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f77"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f78"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4f79"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4f7a"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f7b"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4f7c"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f7d"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f7e"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4f7f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f80"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4f81"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4f76"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 234,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4f83"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f84"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f85"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f86"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4f87"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f88"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4f89"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4f8a"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4f8b"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4f8c"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f8d"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4f82"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "235",
        "name": "Nguyễn Quốc Duy",
        "cty": "ABC",
        "hotline": "60085412"
      },
      "customer": {
        "customerID": "235",
        "name": "Lê Thị An",
        "phone": "69976135",
        "address": "Hà Nội",
        "cmnd": "63436674"
      },
      "fileURL": "talk235.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "314s",
      "date": "9/1/2022",
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
              "_id": "62ebc0df8a312c984bbd4fb4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fb3"
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
              "_id": "62ebc0df8a312c984bbd4fb6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fb5"
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
              "_id": "62ebc0df8a312c984bbd4fb8"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fb7"
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
              "_id": "62ebc0df8a312c984bbd4fba"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fb9"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                "số tiền"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd4fbc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fbb"
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
              "_id": "62ebc0df8a312c984bbd4fbe"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fbd"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4f9a",
    "audioID": 235,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 234,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4f9c"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4f9d"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4f9e"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4f9f"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4fa0"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4fa1"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4fa2"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4fa3"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4fa4"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4fa5"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4fa6"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4f9b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 235,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4fa8"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4fa9"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4faa"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4fab"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4fac"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4fad"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4fae"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4faf"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4fb0"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4fb1"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4fb2"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4fa7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "236",
        "name": "Lê Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "66773169"
      },
      "customer": {
        "customerID": "236",
        "name": "Đặng Quốc Khánh",
        "phone": "23108443",
        "address": "Hà Nội",
        "cmnd": "24555815"
      },
      "fileURL": "talk236.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "480s",
      "date": "13/11/2022",
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
              "_id": "62ebc0df8a312c984bbd4fd9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fd8"
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
              "_id": "62ebc0df8a312c984bbd4fdb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fda"
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
              "_id": "62ebc0df8a312c984bbd4fdd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fdc"
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
              "_id": "62ebc0df8a312c984bbd4fdf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fde"
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
              "_id": "62ebc0df8a312c984bbd4fe1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fe0"
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
              "_id": "62ebc0df8a312c984bbd4fe3"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fe2"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4fbf",
    "audioID": 236,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 235,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4fc1"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4fc2"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4fc3"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4fc4"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4fc5"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4fc6"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4fc7"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4fc8"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4fc9"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4fca"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4fcb"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4fc0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 236,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4fcd"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4fce"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4fcf"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4fd0"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4fd1"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4fd2"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4fd3"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4fd4"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4fd5"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4fd6"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd4fd7"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4fcc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "237",
        "name": "Trương Khánh Cảnh",
        "cty": "ABC",
        "hotline": "77747863"
      },
      "customer": {
        "customerID": "237",
        "name": "Nguyễn Minh Cảnh",
        "phone": "99731241",
        "address": "Hà Nội",
        "cmnd": "72401817"
      },
      "fileURL": "talk237.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "105s",
      "date": "3/4/2022",
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
              "_id": "62ebc0df8a312c984bbd4ffe"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4ffd"
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
              "_id": "62ebc0df8a312c984bbd5000"
            }
          ],
          "_id": "62ebc0df8a312c984bbd4fff"
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
              "_id": "62ebc0df8a312c984bbd5002"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5001"
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
              "_id": "62ebc0df8a312c984bbd5004"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5003"
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
              "_id": "62ebc0df8a312c984bbd5006"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5005"
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
              "_id": "62ebc0df8a312c984bbd5008"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5007"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd4fe4",
    "audioID": 237,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 236,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4fe6"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4fe7"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4fe8"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4fe9"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4fea"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd4feb"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd4fec"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd4fed"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4fee"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4fef"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ff0"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4fe5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 237,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ff2"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ff3"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ff4"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd4ff5"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ff6"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd4ff7"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd4ff8"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ff9"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd4ffa"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd4ffb"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd4ffc"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd4ff1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "238",
        "name": "Phạm An Dạ",
        "cty": "ABC",
        "hotline": "71740893"
      },
      "customer": {
        "customerID": "238",
        "name": "Bùi Quốc An",
        "phone": "94576702",
        "address": "Hà Nội",
        "cmnd": "66227193"
      },
      "fileURL": "talk238.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "352s",
      "date": "1/3/2022",
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
              "_id": "62ebc0df8a312c984bbd5023"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5022"
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
              "_id": "62ebc0df8a312c984bbd5025"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5024"
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
              "_id": "62ebc0df8a312c984bbd5027"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5026"
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
              "_id": "62ebc0df8a312c984bbd5029"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5028"
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
              "_id": "62ebc0df8a312c984bbd502b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd502a"
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
              "_id": "62ebc0df8a312c984bbd502d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd502c"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd5009",
    "audioID": 238,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 237,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd500b"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd500c"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd500d"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd500e"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd500f"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd5010"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd5011"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd5012"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd5013"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd5014"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5015"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd500a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 238,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd5017"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd5018"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd5019"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd501a"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd501b"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd501c"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd501d"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd501e"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd501f"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd5020"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd5021"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd5016"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "239",
        "name": "Trương Dương Cảnh",
        "cty": "ABC",
        "hotline": "76292579"
      },
      "customer": {
        "customerID": "239",
        "name": "Bùi Hải Dạ",
        "phone": "51905481",
        "address": "Hà Nội",
        "cmnd": "24146824"
      },
      "fileURL": "talk239.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "297s",
      "date": "23/4/2022",
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
              "_id": "62ebc0df8a312c984bbd5048"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5047"
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
              "_id": "62ebc0df8a312c984bbd504a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5049"
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
              "_id": "62ebc0df8a312c984bbd504c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd504b"
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
              "_id": "62ebc0df8a312c984bbd504e"
            }
          ],
          "_id": "62ebc0df8a312c984bbd504d"
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
              "_id": "62ebc0df8a312c984bbd5050"
            }
          ],
          "_id": "62ebc0df8a312c984bbd504f"
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
              "_id": "62ebc0df8a312c984bbd5052"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5051"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd502e",
    "audioID": 239,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 238,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd5030"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd5031"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5032"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd5033"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5034"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd5035"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd5036"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5037"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5038"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5039"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd503a"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd502f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 239,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd503c"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd503d"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd503e"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd503f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd5040"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd5041"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5042"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd5043"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd5044"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd5045"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd5046"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd503b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "240",
        "name": "Ngô Quốc Quyền",
        "cty": "ABC",
        "hotline": "59420906"
      },
      "customer": {
        "customerID": "240",
        "name": "Bùi Phương Hồng",
        "phone": "41592609",
        "address": "Hà Nội",
        "cmnd": "90960112"
      },
      "fileURL": "talk240.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "556s",
      "date": "29/1/2022",
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
              "_id": "62ebc0df8a312c984bbd506d"
            }
          ],
          "_id": "62ebc0df8a312c984bbd506c"
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
              "_id": "62ebc0df8a312c984bbd506f"
            }
          ],
          "_id": "62ebc0df8a312c984bbd506e"
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
              "_id": "62ebc0df8a312c984bbd5071"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5070"
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
              "_id": "62ebc0df8a312c984bbd5073"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5072"
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
              "_id": "62ebc0df8a312c984bbd5075"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5074"
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
              "_id": "62ebc0df8a312c984bbd5077"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5076"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd5053",
    "audioID": 240,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 239,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd5055"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5056"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd5057"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd5058"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd5059"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd505a"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd505b"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd505c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd505d"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd505e"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd505f"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd5054"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 240,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5061"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd5062"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd5063"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5064"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd5065"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5066"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5067"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5068"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5069"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd506a"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd506b"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd5060"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "241",
        "name": "Ngô Quốc Ánh",
        "cty": "ABC",
        "hotline": "26356287"
      },
      "customer": {
        "customerID": "241",
        "name": "Phan Thị Cảnh",
        "phone": "51217147",
        "address": "Hà Nội",
        "cmnd": "71041085"
      },
      "fileURL": "talk241.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "252s",
      "date": "24/8/2022",
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
              "_id": "62ebc0df8a312c984bbd5092"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5091"
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
              "_id": "62ebc0df8a312c984bbd5094"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5093"
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
              "_id": "62ebc0df8a312c984bbd5096"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5095"
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
              "_id": "62ebc0df8a312c984bbd5098"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5097"
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
              "_id": "62ebc0df8a312c984bbd509a"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5099"
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
              "_id": "62ebc0df8a312c984bbd509c"
            }
          ],
          "_id": "62ebc0df8a312c984bbd509b"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd5078",
    "audioID": 241,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 240,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd507a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd507b"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd507c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd507d"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd507e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd507f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5080"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5081"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd5082"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd5083"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd5084"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd5079"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 241,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd5086"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd5087"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd5088"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd5089"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd508a"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd508b"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd508c"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd508d"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd508e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd508f"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd5090"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd5085"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "242",
        "name": "Nguyễn Văn Khánh",
        "cty": "ABC",
        "hotline": "19687022"
      },
      "customer": {
        "customerID": "242",
        "name": "Ngô Khánh Ánh",
        "phone": "86468084",
        "address": "Hà Nội",
        "cmnd": "98483794"
      },
      "fileURL": "talk242.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "32s",
      "date": "17/11/2022",
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
              "_id": "62ebc0df8a312c984bbd50b7"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50b6"
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
              "_id": "62ebc0df8a312c984bbd50b9"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50b8"
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
              "_id": "62ebc0df8a312c984bbd50bb"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50ba"
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
              "_id": "62ebc0df8a312c984bbd50bd"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50bc"
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
              "_id": "62ebc0df8a312c984bbd50bf"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50be"
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
              "_id": "62ebc0df8a312c984bbd50c1"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50c0"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd509d",
    "audioID": 242,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 241,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd509f"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50a0"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd50a1"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd50a2"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50a3"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd50a4"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd50a5"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd50a6"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd50a7"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd50a8"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd50a9"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd509e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 242,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50ab"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd50ac"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd50ad"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50ae"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd50af"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd50b0"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd50b1"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd50b2"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd50b3"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50b4"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd50b5"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd50aa"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "243",
        "name": "Phạm Khánh Cảnh",
        "cty": "ABC",
        "hotline": "76916670"
      },
      "customer": {
        "customerID": "243",
        "name": "Bùi Hữu Duy",
        "phone": "14069279",
        "address": "Hà Nội",
        "cmnd": "75726566"
      },
      "fileURL": "talk243.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "311s",
      "date": "4/11/2022",
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
              "_id": "62ebc0df8a312c984bbd50dc"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50db"
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
              "_id": "62ebc0df8a312c984bbd50de"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50dd"
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
              "_id": "62ebc0df8a312c984bbd50e0"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50df"
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
              "_id": "62ebc0df8a312c984bbd50e2"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50e1"
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
              "_id": "62ebc0df8a312c984bbd50e4"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50e3"
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
              "_id": "62ebc0df8a312c984bbd50e6"
            }
          ],
          "_id": "62ebc0df8a312c984bbd50e5"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd50c2",
    "audioID": 243,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 242,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd50c4"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd50c5"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50c6"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd50c7"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd50c8"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd50c9"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd50ca"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50cb"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd50cc"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd50cd"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd50ce"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd50c3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 243,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd50d0"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd50d1"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd50d2"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd50d3"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd50d4"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd50d5"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd50d6"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50d7"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd50d8"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd50d9"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd50da"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd50cf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "244",
        "name": "Phạm Khánh Lợi",
        "cty": "ABC",
        "hotline": "61477392"
      },
      "customer": {
        "customerID": "244",
        "name": "Bùi Quốc Duy",
        "phone": "54554216",
        "address": "Hà Nội",
        "cmnd": "29785301"
      },
      "fileURL": "talk244.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "266s",
      "date": "4/9/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0df8a312c984bbd5101"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5100"
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
              "_id": "62ebc0df8a312c984bbd5103"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5102"
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
              "_id": "62ebc0df8a312c984bbd5105"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5104"
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
              "_id": "62ebc0df8a312c984bbd5107"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5106"
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
              "_id": "62ebc0df8a312c984bbd5109"
            }
          ],
          "_id": "62ebc0df8a312c984bbd5108"
        },
        {
          "name": "br_agnt_veryfy true identity",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0df8a312c984bbd510b"
            }
          ],
          "_id": "62ebc0df8a312c984bbd510a"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd50e7",
    "audioID": 244,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 243,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd50e9"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd50ea"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd50eb"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd50ec"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd50ed"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd50ee"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd50ef"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd50f0"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd50f1"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd50f2"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd50f3"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd50e8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 244,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd50f5"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd50f6"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50f7"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd50f8"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd50f9"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd50fa"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd50fb"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd50fc"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd50fd"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd50fe"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd50ff"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd50f4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "245",
        "name": "Trương Quốc Cảnh",
        "cty": "ABC",
        "hotline": "17525491"
      },
      "customer": {
        "customerID": "245",
        "name": "Lê Khánh Thái Qúy",
        "phone": "87793387",
        "address": "Hà Nội",
        "cmnd": "28539055"
      },
      "fileURL": "talk245.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "429s",
      "date": "27/5/2022",
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
              "_id": "62ebc0e08a312c984bbd5126"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5125"
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
              "_id": "62ebc0e08a312c984bbd5128"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5127"
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
              "_id": "62ebc0e08a312c984bbd512a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5129"
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
              "_id": "62ebc0e08a312c984bbd512c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd512b"
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
              "_id": "62ebc0e08a312c984bbd512e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd512d"
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
              "_id": "62ebc0e08a312c984bbd5130"
            }
          ],
          "_id": "62ebc0e08a312c984bbd512f"
        }
      ]
    },
    "_id": "62ebc0df8a312c984bbd510c",
    "audioID": 245,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 244,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd510e"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd510f"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd5110"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd5111"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd5112"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5113"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0df8a312c984bbd5114"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd5115"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0df8a312c984bbd5116"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0df8a312c984bbd5117"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5118"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd510d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 245,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd511a"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0df8a312c984bbd511b"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd511c"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0df8a312c984bbd511d"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0df8a312c984bbd511e"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd511f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5120"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0df8a312c984bbd5121"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0df8a312c984bbd5122"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0df8a312c984bbd5123"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0df8a312c984bbd5124"
            }
          ]
        },
        "_id": "62ebc0df8a312c984bbd5119"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "246",
        "name": "Huỳnh Dương Hồng",
        "cty": "ABC",
        "hotline": "47617985"
      },
      "customer": {
        "customerID": "246",
        "name": "Lê Văn Hồng",
        "phone": "51358219",
        "address": "Hà Nội",
        "cmnd": "60667939"
      },
      "fileURL": "talk246.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "289s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd514b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd514a"
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
              "_id": "62ebc0e08a312c984bbd514d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd514c"
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
              "_id": "62ebc0e08a312c984bbd514f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd514e"
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
              "_id": "62ebc0e08a312c984bbd5151"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5150"
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
              "_id": "62ebc0e08a312c984bbd5153"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5152"
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
              "_id": "62ebc0e08a312c984bbd5155"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5154"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5131",
    "audioID": 246,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 245,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5133"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5134"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5135"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5136"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5137"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5138"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5139"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd513a"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd513b"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd513c"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd513d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5132"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 246,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd513f"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5140"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5141"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5142"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5143"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5144"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5145"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5146"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5147"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5148"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5149"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd513e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "247",
        "name": "Huỳnh Hữu Cảnh",
        "cty": "ABC",
        "hotline": "93996582"
      },
      "customer": {
        "customerID": "247",
        "name": "Đặng Văn Duy",
        "phone": "27679245",
        "address": "Hà Nội",
        "cmnd": "45692313"
      },
      "fileURL": "talk247.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "340s",
      "date": "25/10/2022",
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
              "_id": "62ebc0e08a312c984bbd5170"
            }
          ],
          "_id": "62ebc0e08a312c984bbd516f"
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
              "_id": "62ebc0e08a312c984bbd5172"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5171"
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
              "_id": "62ebc0e08a312c984bbd5174"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5173"
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
              "_id": "62ebc0e08a312c984bbd5176"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5175"
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
              "_id": "62ebc0e08a312c984bbd5178"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5177"
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
              "_id": "62ebc0e08a312c984bbd517a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5179"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5156",
    "audioID": 247,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 246,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5158"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5159"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd515a"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd515b"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd515c"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd515d"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd515e"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd515f"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5160"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5161"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5162"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5157"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 247,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5164"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5165"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5166"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5167"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5168"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5169"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd516a"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd516b"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd516c"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd516d"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd516e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5163"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "248",
        "name": "Phan Văn Hồng",
        "cty": "ABC",
        "hotline": "59950927"
      },
      "customer": {
        "customerID": "248",
        "name": "Huỳnh Thị Hồng",
        "phone": "59209638",
        "address": "Hà Nội",
        "cmnd": "43884680"
      },
      "fileURL": "talk248.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "519s",
      "date": "26/1/2022",
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
              "_id": "62ebc0e08a312c984bbd5195"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5194"
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
              "_id": "62ebc0e08a312c984bbd5197"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5196"
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
              "_id": "62ebc0e08a312c984bbd5199"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5198"
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
              "_id": "62ebc0e08a312c984bbd519b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd519a"
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
              "_id": "62ebc0e08a312c984bbd519d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd519c"
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
              "_id": "62ebc0e08a312c984bbd519f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd519e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd517b",
    "audioID": 248,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 247,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd517d"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd517e"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd517f"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5180"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5181"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5182"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5183"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5184"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5185"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5186"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5187"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd517c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 248,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5189"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd518a"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd518b"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd518c"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd518d"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd518e"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd518f"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5190"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5191"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5192"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5193"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5188"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "249",
        "name": "Bùi Thị Lợi",
        "cty": "ABC",
        "hotline": "36765513"
      },
      "customer": {
        "customerID": "249",
        "name": "Lê Văn Cảnh",
        "phone": "39022216",
        "address": "Hà Nội",
        "cmnd": "67191484"
      },
      "fileURL": "talk249.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "246s",
      "date": "2/9/2022",
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
              "_id": "62ebc0e08a312c984bbd51ba"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51b9"
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
              "_id": "62ebc0e08a312c984bbd51bc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51bb"
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
              "_id": "62ebc0e08a312c984bbd51be"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51bd"
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
              "_id": "62ebc0e08a312c984bbd51c0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51bf"
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
              "_id": "62ebc0e08a312c984bbd51c2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51c1"
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
              "_id": "62ebc0e08a312c984bbd51c4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51c3"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd51a0",
    "audioID": 249,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 248,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd51a2"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51a3"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd51a4"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd51a5"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd51a6"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd51a7"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd51a8"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd51a9"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51aa"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd51ab"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd51ac"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd51a1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 249,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd51ae"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd51af"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd51b0"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd51b1"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd51b2"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd51b3"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd51b4"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51b5"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd51b6"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd51b7"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51b8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd51ad"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "250",
        "name": "Đặng Văn An",
        "cty": "ABC",
        "hotline": "40532602"
      },
      "customer": {
        "customerID": "250",
        "name": "Bùi Hải Thái Qúy",
        "phone": "16386991",
        "address": "Hà Nội",
        "cmnd": "30346078"
      },
      "fileURL": "talk250.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "201s",
      "date": "9/12/2022",
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
              "_id": "62ebc0e08a312c984bbd51df"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51de"
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
              "_id": "62ebc0e08a312c984bbd51e1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51e0"
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
              "_id": "62ebc0e08a312c984bbd51e3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51e2"
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
              "_id": "62ebc0e08a312c984bbd51e5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51e4"
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
              "_id": "62ebc0e08a312c984bbd51e7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51e6"
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
              "_id": "62ebc0e08a312c984bbd51e9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd51e8"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd51c5",
    "audioID": 250,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 249,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd51c7"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd51c8"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd51c9"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51ca"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51cb"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd51cc"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd51cd"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd51ce"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd51cf"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd51d0"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd51d1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd51c6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 250,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd51d3"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd51d4"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd51d5"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd51d6"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd51d7"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd51d8"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd51d9"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd51da"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd51db"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51dc"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd51dd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd51d2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "251",
        "name": "Trương Minh An",
        "cty": "ABC",
        "hotline": "95920368"
      },
      "customer": {
        "customerID": "251",
        "name": "Đặng Minh An",
        "phone": "28817178",
        "address": "Hà Nội",
        "cmnd": "45444495"
      },
      "fileURL": "talk251.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "345s",
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
                "chưa trả"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5204"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5203"
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
              "_id": "62ebc0e08a312c984bbd5206"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5205"
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
              "_id": "62ebc0e08a312c984bbd5208"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5207"
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
              "_id": "62ebc0e08a312c984bbd520a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5209"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd520c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd520b"
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
              "_id": "62ebc0e08a312c984bbd520e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd520d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd51ea",
    "audioID": 251,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 250,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd51ec"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd51ed"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd51ee"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd51ef"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd51f0"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd51f1"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd51f2"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd51f3"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd51f4"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd51f5"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd51f6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd51eb"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 251,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd51f8"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51f9"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd51fa"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd51fb"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51fc"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd51fd"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd51fe"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd51ff"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5200"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5201"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5202"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd51f7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "252",
        "name": "Trần Phương Ánh",
        "cty": "ABC",
        "hotline": "73979150"
      },
      "customer": {
        "customerID": "252",
        "name": "Đặng Thị Quyền",
        "phone": "73945564",
        "address": "Hà Nội",
        "cmnd": "61530172"
      },
      "fileURL": "talk252.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "71s",
      "date": "29/3/2022",
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
              "_id": "62ebc0e08a312c984bbd5229"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5228"
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
              "_id": "62ebc0e08a312c984bbd522b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd522a"
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
              "_id": "62ebc0e08a312c984bbd522d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd522c"
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
              "_id": "62ebc0e08a312c984bbd522f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd522e"
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
              "_id": "62ebc0e08a312c984bbd5231"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5230"
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
              "_id": "62ebc0e08a312c984bbd5233"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5232"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd520f",
    "audioID": 252,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 251,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5211"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5212"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5213"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5214"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5215"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5216"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5217"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5218"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5219"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd521a"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd521b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5210"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 252,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd521d"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd521e"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd521f"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5220"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5221"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5222"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5223"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5224"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5225"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5226"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5227"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd521c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "253",
        "name": "Ngô Thị Hồng",
        "cty": "ABC",
        "hotline": "88549333"
      },
      "customer": {
        "customerID": "253",
        "name": "Huỳnh An Hồng",
        "phone": "44155793",
        "address": "Hà Nội",
        "cmnd": "50616838"
      },
      "fileURL": "talk253.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "119s",
      "date": "12/3/2022",
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
              "_id": "62ebc0e08a312c984bbd524e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd524d"
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
              "_id": "62ebc0e08a312c984bbd5250"
            }
          ],
          "_id": "62ebc0e08a312c984bbd524f"
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
              "_id": "62ebc0e08a312c984bbd5252"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5251"
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
              "_id": "62ebc0e08a312c984bbd5254"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5253"
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
              "_id": "62ebc0e08a312c984bbd5256"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5255"
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
              "_id": "62ebc0e08a312c984bbd5258"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5257"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5234",
    "audioID": 253,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 252,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5236"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5237"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5238"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5239"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd523a"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd523b"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd523c"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd523d"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd523e"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd523f"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5240"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5235"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 253,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5242"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5243"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5244"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5245"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5246"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5247"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5248"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5249"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd524a"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd524b"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd524c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5241"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "254",
        "name": "Trần Khánh Quyền",
        "cty": "ABC",
        "hotline": "94850518"
      },
      "customer": {
        "customerID": "254",
        "name": "Bùi Khánh Thái Qúy",
        "phone": "50677876",
        "address": "Hà Nội",
        "cmnd": "71725482"
      },
      "fileURL": "talk254.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "76s",
      "date": "15/11/2022",
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
              "_id": "62ebc0e08a312c984bbd5273"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5272"
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
              "_id": "62ebc0e08a312c984bbd5275"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5274"
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
              "_id": "62ebc0e08a312c984bbd5277"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5276"
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
              "_id": "62ebc0e08a312c984bbd5279"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5278"
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
              "_id": "62ebc0e08a312c984bbd527b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd527a"
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
              "_id": "62ebc0e08a312c984bbd527d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd527c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5259",
    "audioID": 254,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 253,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd525b"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd525c"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd525d"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd525e"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd525f"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5260"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5261"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5262"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5263"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5264"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5265"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd525a"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 254,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5267"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5268"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5269"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd526a"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd526b"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd526c"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd526d"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd526e"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd526f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5270"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5271"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5266"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "255",
        "name": "Bùi Văn Khánh",
        "cty": "ABC",
        "hotline": "21797808"
      },
      "customer": {
        "customerID": "255",
        "name": "Trương Văn Lợi",
        "phone": "50095544",
        "address": "Hà Nội",
        "cmnd": "91304588"
      },
      "fileURL": "talk255.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "369s",
      "date": "4/8/2022",
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
              "_id": "62ebc0e08a312c984bbd5298"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5297"
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
              "_id": "62ebc0e08a312c984bbd529a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5299"
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
              "_id": "62ebc0e08a312c984bbd529c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd529b"
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
              "_id": "62ebc0e08a312c984bbd529e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd529d"
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
              "_id": "62ebc0e08a312c984bbd52a0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd529f"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "tiền"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd52a2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52a1"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd527e",
    "audioID": 255,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 254,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5280"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5281"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5282"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5283"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5284"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5285"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5286"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5287"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5288"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5289"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd528a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd527f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 255,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd528c"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd528d"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd528e"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd528f"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5290"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5291"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5292"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5293"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5294"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5295"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5296"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd528b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "256",
        "name": "Bùi Văn Hồng",
        "cty": "ABC",
        "hotline": "27418482"
      },
      "customer": {
        "customerID": "256",
        "name": "Bùi Văn Duy",
        "phone": "47919410",
        "address": "Hà Nội",
        "cmnd": "19090627"
      },
      "fileURL": "talk256.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "173s",
      "date": "23/3/2022",
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
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd52bd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52bc"
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
              "_id": "62ebc0e08a312c984bbd52bf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52be"
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
              "_id": "62ebc0e08a312c984bbd52c1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52c0"
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
              "_id": "62ebc0e08a312c984bbd52c3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52c2"
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
              "_id": "62ebc0e08a312c984bbd52c5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52c4"
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
              "_id": "62ebc0e08a312c984bbd52c7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52c6"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd52a3",
    "audioID": 256,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 255,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd52a5"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd52a6"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd52a7"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52a8"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd52a9"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd52aa"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd52ab"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd52ac"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52ad"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd52ae"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd52af"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd52a4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 256,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd52b1"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd52b2"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd52b3"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd52b4"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd52b5"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd52b6"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd52b7"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd52b8"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd52b9"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd52ba"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd52bb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd52b0"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "257",
        "name": "Ngô Dương An",
        "cty": "ABC",
        "hotline": "11348276"
      },
      "customer": {
        "customerID": "257",
        "name": "Nguyễn Thị Cảnh",
        "phone": "80389426",
        "address": "Hà Nội",
        "cmnd": "34709708"
      },
      "fileURL": "talk257.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "319s",
      "date": "20/8/2022",
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
              "_id": "62ebc0e08a312c984bbd52e2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52e1"
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
              "_id": "62ebc0e08a312c984bbd52e4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52e3"
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
              "_id": "62ebc0e08a312c984bbd52e6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52e5"
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
              "_id": "62ebc0e08a312c984bbd52e8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52e7"
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
              "_id": "62ebc0e08a312c984bbd52ea"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52e9"
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
              "_id": "62ebc0e08a312c984bbd52ec"
            }
          ],
          "_id": "62ebc0e08a312c984bbd52eb"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd52c8",
    "audioID": 257,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 256,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52ca"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd52cb"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52cc"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd52cd"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52ce"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52cf"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52d0"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52d1"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd52d2"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd52d3"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd52d4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd52c9"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 257,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52d6"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd52d7"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd52d8"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd52d9"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd52da"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd52db"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd52dc"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52dd"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd52de"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd52df"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd52e0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd52d5"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "258",
        "name": "Bùi Khánh Lợi",
        "cty": "ABC",
        "hotline": "57112622"
      },
      "customer": {
        "customerID": "258",
        "name": "Huỳnh Dương An",
        "phone": "52791242",
        "address": "Hà Nội",
        "cmnd": "28212686"
      },
      "fileURL": "talk258.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "466s",
      "date": "29/10/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
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
              "_id": "62ebc0e08a312c984bbd5307"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5306"
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
              "_id": "62ebc0e08a312c984bbd5309"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5308"
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
              "_id": "62ebc0e08a312c984bbd530b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd530a"
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
              "_id": "62ebc0e08a312c984bbd530d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd530c"
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
              "_id": "62ebc0e08a312c984bbd530f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd530e"
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
              "_id": "62ebc0e08a312c984bbd5311"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5310"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd52ed",
    "audioID": 258,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 257,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd52ef"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52f0"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd52f1"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd52f2"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd52f3"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd52f4"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd52f5"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd52f6"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd52f7"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd52f8"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd52f9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd52ee"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 258,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd52fb"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd52fc"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd52fd"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd52fe"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd52ff"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5300"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5301"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5302"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5303"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5304"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5305"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd52fa"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "259",
        "name": "Trương Thị Lợi",
        "cty": "ABC",
        "hotline": "55242314"
      },
      "customer": {
        "customerID": "259",
        "name": "Ngô Văn Lợi",
        "phone": "82541945",
        "address": "Hà Nội",
        "cmnd": "35141986"
      },
      "fileURL": "talk259.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "450s",
      "date": "17/2/2022",
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
              "_id": "62ebc0e08a312c984bbd532c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd532b"
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
              "_id": "62ebc0e08a312c984bbd532e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd532d"
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
              "_id": "62ebc0e08a312c984bbd5330"
            }
          ],
          "_id": "62ebc0e08a312c984bbd532f"
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
              "_id": "62ebc0e08a312c984bbd5332"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5331"
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
              "_id": "62ebc0e08a312c984bbd5334"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5333"
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
              "_id": "62ebc0e08a312c984bbd5336"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5335"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5312",
    "audioID": 259,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 258,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5314"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5315"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5316"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5317"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5318"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5319"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd531a"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd531b"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd531c"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd531d"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd531e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5313"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 259,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5320"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5321"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5322"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5323"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5324"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5325"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5326"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5327"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5328"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5329"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd532a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd531f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "260",
        "name": "Bùi Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "67346807"
      },
      "customer": {
        "customerID": "260",
        "name": "Huỳnh Minh Cảnh",
        "phone": "25337540",
        "address": "Hà Nội",
        "cmnd": "48696845"
      },
      "fileURL": "talk260.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "362s",
      "date": "15/2/2022",
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
              "_id": "62ebc0e08a312c984bbd5351"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5350"
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
              "_id": "62ebc0e08a312c984bbd5353"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5352"
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
              "_id": "62ebc0e08a312c984bbd5355"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5354"
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
              "_id": "62ebc0e08a312c984bbd5357"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5356"
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
              "_id": "62ebc0e08a312c984bbd5359"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5358"
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
              "_id": "62ebc0e08a312c984bbd535b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd535a"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5337",
    "audioID": 260,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 259,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5339"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd533a"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd533b"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd533c"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd533d"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd533e"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd533f"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5340"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5341"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5342"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5343"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5338"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 260,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5345"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5346"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5347"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5348"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5349"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd534a"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd534b"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd534c"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd534d"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd534e"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd534f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5344"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "261",
        "name": "Ngô Khánh An",
        "cty": "ABC",
        "hotline": "30424401"
      },
      "customer": {
        "customerID": "261",
        "name": "Bùi Dương Lợi",
        "phone": "19015030",
        "address": "Hà Nội",
        "cmnd": "40336505"
      },
      "fileURL": "talk261.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "353s",
      "date": "9/1/2022",
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
              "_id": "62ebc0e08a312c984bbd5376"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5375"
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
              "_id": "62ebc0e08a312c984bbd5378"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5377"
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
              "_id": "62ebc0e08a312c984bbd537a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5379"
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
              "_id": "62ebc0e08a312c984bbd537c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd537b"
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
              "_id": "62ebc0e08a312c984bbd537e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd537d"
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
              "_id": "62ebc0e08a312c984bbd5380"
            }
          ],
          "_id": "62ebc0e08a312c984bbd537f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd535c",
    "audioID": 261,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 260,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd535e"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd535f"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5360"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5361"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5362"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5363"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5364"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5365"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5366"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5367"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5368"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd535d"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 261,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd536a"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd536b"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd536c"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd536d"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd536e"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd536f"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5370"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5371"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5372"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5373"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5374"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5369"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "262",
        "name": "Bùi Hữu Lợi",
        "cty": "ABC",
        "hotline": "58468709"
      },
      "customer": {
        "customerID": "262",
        "name": "Đặng Văn Dạ",
        "phone": "50272567",
        "address": "Hà Nội",
        "cmnd": "14893406"
      },
      "fileURL": "talk262.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "478s",
      "date": "12/10/2022",
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
              "_id": "62ebc0e08a312c984bbd539b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd539a"
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
              "_id": "62ebc0e08a312c984bbd539d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd539c"
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
              "_id": "62ebc0e08a312c984bbd539f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd539e"
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
              "_id": "62ebc0e08a312c984bbd53a1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53a0"
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
              "_id": "62ebc0e08a312c984bbd53a3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53a2"
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
              "_id": "62ebc0e08a312c984bbd53a5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53a4"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5381",
    "audioID": 262,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 261,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5383"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5384"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5385"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5386"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5387"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5388"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5389"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd538a"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd538b"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd538c"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd538d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5382"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 262,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd538f"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5390"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5391"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5392"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5393"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5394"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5395"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5396"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5397"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5398"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5399"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd538e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "263",
        "name": "Trương Văn Lợi",
        "cty": "ABC",
        "hotline": "10773665"
      },
      "customer": {
        "customerID": "263",
        "name": "Trương Văn Duy",
        "phone": "18497594",
        "address": "Hà Nội",
        "cmnd": "83111086"
      },
      "fileURL": "talk263.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "283s",
      "date": "14/2/2022",
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
              "_id": "62ebc0e08a312c984bbd53c0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53bf"
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
              "_id": "62ebc0e08a312c984bbd53c2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53c1"
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
              "_id": "62ebc0e08a312c984bbd53c4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53c3"
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
              "_id": "62ebc0e08a312c984bbd53c6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53c5"
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
              "_id": "62ebc0e08a312c984bbd53c8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53c7"
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
              "_id": "62ebc0e08a312c984bbd53ca"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53c9"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd53a6",
    "audioID": 263,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 262,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd53a8"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd53a9"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd53aa"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd53ab"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd53ac"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53ad"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd53ae"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53af"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd53b0"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd53b1"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53b2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd53a7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 263,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd53b4"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53b5"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd53b6"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd53b7"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd53b8"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd53b9"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd53ba"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd53bb"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd53bc"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd53bd"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd53be"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd53b3"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "264",
        "name": "Huỳnh Thị Ánh",
        "cty": "ABC",
        "hotline": "39434104"
      },
      "customer": {
        "customerID": "264",
        "name": "Phan Hải Quyền",
        "phone": "93665453",
        "address": "Hà Nội",
        "cmnd": "70212966"
      },
      "fileURL": "talk264.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "315s",
      "date": "17/12/2022",
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
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd53e5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53e4"
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
              "_id": "62ebc0e08a312c984bbd53e7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53e6"
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
              "_id": "62ebc0e08a312c984bbd53e9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53e8"
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
              "_id": "62ebc0e08a312c984bbd53eb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53ea"
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
              "_id": "62ebc0e08a312c984bbd53ed"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53ec"
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
              "_id": "62ebc0e08a312c984bbd53ef"
            }
          ],
          "_id": "62ebc0e08a312c984bbd53ee"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd53cb",
    "audioID": 264,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 263,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd53cd"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd53ce"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd53cf"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd53d0"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd53d1"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd53d2"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd53d3"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd53d4"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd53d5"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd53d6"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd53d7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd53cc"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 264,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53d9"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd53da"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd53db"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd53dc"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd53dd"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd53de"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd53df"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd53e0"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53e1"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53e2"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd53e3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd53d8"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "265",
        "name": "Nguyễn Khánh Cảnh",
        "cty": "ABC",
        "hotline": "31544554"
      },
      "customer": {
        "customerID": "265",
        "name": "Đặng Hải Ánh",
        "phone": "74455085",
        "address": "Hà Nội",
        "cmnd": "22900579"
      },
      "fileURL": "talk265.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "397s",
      "date": "7/1/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd540a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5409"
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
              "_id": "62ebc0e08a312c984bbd540c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd540b"
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
              "_id": "62ebc0e08a312c984bbd540e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd540d"
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
              "_id": "62ebc0e08a312c984bbd5410"
            }
          ],
          "_id": "62ebc0e08a312c984bbd540f"
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
              "_id": "62ebc0e08a312c984bbd5412"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5411"
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
              "_id": "62ebc0e08a312c984bbd5414"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5413"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd53f0",
    "audioID": 265,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 264,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd53f2"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd53f3"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53f4"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53f5"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd53f6"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd53f7"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd53f8"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd53f9"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd53fa"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd53fb"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd53fc"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd53f1"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 265,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd53fe"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd53ff"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5400"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5401"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5402"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5403"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5404"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5405"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5406"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5407"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5408"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd53fd"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "266",
        "name": "Lê Khánh Lợi",
        "cty": "ABC",
        "hotline": "37178453"
      },
      "customer": {
        "customerID": "266",
        "name": "Nguyễn Minh An",
        "phone": "83917430",
        "address": "Hà Nội",
        "cmnd": "68614982"
      },
      "fileURL": "talk266.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "360s",
      "date": "29/11/2022",
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
              "_id": "62ebc0e08a312c984bbd542f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd542e"
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
              "_id": "62ebc0e08a312c984bbd5431"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5430"
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
              "_id": "62ebc0e08a312c984bbd5433"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5432"
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
              "_id": "62ebc0e08a312c984bbd5435"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5434"
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
              "_id": "62ebc0e08a312c984bbd5437"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5436"
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
              "_id": "62ebc0e08a312c984bbd5439"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5438"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5415",
    "audioID": 266,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 265,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5417"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5418"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5419"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd541a"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd541b"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd541c"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd541d"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd541e"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd541f"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5420"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5421"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5416"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 266,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5423"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5424"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5425"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5426"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5427"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5428"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5429"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd542a"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd542b"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd542c"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd542d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5422"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "267",
        "name": "Trần Khánh Ánh",
        "cty": "ABC",
        "hotline": "55907857"
      },
      "customer": {
        "customerID": "267",
        "name": "Nguyễn Quốc Ánh",
        "phone": "92043683",
        "address": "Hà Nội",
        "cmnd": "84179167"
      },
      "fileURL": "talk267.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "478s",
      "date": "3/12/2022",
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
              "_id": "62ebc0e08a312c984bbd5454"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5453"
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
              "_id": "62ebc0e08a312c984bbd5456"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5455"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5458"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5457"
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
              "_id": "62ebc0e08a312c984bbd545a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5459"
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
              "_id": "62ebc0e08a312c984bbd545c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd545b"
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
              "_id": "62ebc0e08a312c984bbd545e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd545d"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd543a",
    "audioID": 267,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 266,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd543c"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd543d"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd543e"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd543f"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5440"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5441"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5442"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5443"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5444"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5445"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5446"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd543b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 267,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5448"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5449"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd544a"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd544b"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd544c"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd544d"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd544e"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd544f"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5450"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5451"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5452"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5447"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "268",
        "name": "Đặng Hải Cảnh",
        "cty": "ABC",
        "hotline": "92063093"
      },
      "customer": {
        "customerID": "268",
        "name": "Đặng Quốc Dạ",
        "phone": "65491702",
        "address": "Hà Nội",
        "cmnd": "18375899"
      },
      "fileURL": "talk268.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "137s",
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
                "nợ chưa trả"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5479"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5478"
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
              "_id": "62ebc0e08a312c984bbd547b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd547a"
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
              "_id": "62ebc0e08a312c984bbd547d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd547c"
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
              "_id": "62ebc0e08a312c984bbd547f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd547e"
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
              "_id": "62ebc0e08a312c984bbd5481"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5480"
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
              "_id": "62ebc0e08a312c984bbd5483"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5482"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd545f",
    "audioID": 268,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 267,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5461"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5462"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5463"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5464"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5465"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5466"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5467"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5468"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5469"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd546a"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd546b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5460"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 268,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd546d"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd546e"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd546f"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5470"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5471"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5472"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5473"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5474"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5475"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5476"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5477"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd546c"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "269",
        "name": "Lê Hữu Ánh",
        "cty": "ABC",
        "hotline": "83361211"
      },
      "customer": {
        "customerID": "269",
        "name": "Ngô Dương Quyền",
        "phone": "57522533",
        "address": "Hà Nội",
        "cmnd": "10626258"
      },
      "fileURL": "talk269.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "492s",
      "date": "20/12/2022",
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
              "_id": "62ebc0e08a312c984bbd549e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd549d"
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
              "_id": "62ebc0e08a312c984bbd54a0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd549f"
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
              "_id": "62ebc0e08a312c984bbd54a2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54a1"
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
              "_id": "62ebc0e08a312c984bbd54a4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54a3"
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
              "_id": "62ebc0e08a312c984bbd54a6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54a5"
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
              "_id": "62ebc0e08a312c984bbd54a8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54a7"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5484",
    "audioID": 269,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 268,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5486"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5487"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5488"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5489"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd548a"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd548b"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd548c"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd548d"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd548e"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd548f"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5490"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5485"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 269,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5492"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5493"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5494"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5495"
            },
            {
              "duration": 4,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5496"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5497"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5498"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5499"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd549a"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd549b"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd549c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5491"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "270",
        "name": "Lê Hải Cảnh",
        "cty": "ABC",
        "hotline": "72220344"
      },
      "customer": {
        "customerID": "270",
        "name": "Huỳnh Hữu Dạ",
        "phone": "24985738",
        "address": "Hà Nội",
        "cmnd": "50671082"
      },
      "fileURL": "talk270.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "157s",
      "date": "25/9/2022",
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
              "_id": "62ebc0e08a312c984bbd54c3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54c2"
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
              "_id": "62ebc0e08a312c984bbd54c5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54c4"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd54c7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54c6"
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
              "_id": "62ebc0e08a312c984bbd54c9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54c8"
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
              "_id": "62ebc0e08a312c984bbd54cb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54ca"
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
              "_id": "62ebc0e08a312c984bbd54cd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54cc"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd54a9",
    "audioID": 270,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 269,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd54ab"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd54ac"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54ad"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd54ae"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd54af"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd54b0"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd54b1"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd54b2"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54b3"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd54b4"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd54b5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd54aa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 270,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54b7"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54b8"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd54b9"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd54ba"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd54bb"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd54bc"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd54bd"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd54be"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd54bf"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd54c0"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd54c1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd54b6"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "271",
        "name": "Nguyễn Dương Duy",
        "cty": "ABC",
        "hotline": "28374279"
      },
      "customer": {
        "customerID": "271",
        "name": "Phạm Hữu Quyền",
        "phone": "27547020",
        "address": "Hà Nội",
        "cmnd": "49777430"
      },
      "fileURL": "talk271.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "143s",
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
                "sao anh chưa thanh toán"
              ],
              "customer": [
                "anh đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd54e8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54e7"
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
              "_id": "62ebc0e08a312c984bbd54ea"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54e9"
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
              "_id": "62ebc0e08a312c984bbd54ec"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54eb"
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
              "_id": "62ebc0e08a312c984bbd54ee"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54ed"
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
              "_id": "62ebc0e08a312c984bbd54f0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54ef"
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
              "_id": "62ebc0e08a312c984bbd54f2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd54f1"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd54ce",
    "audioID": 271,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 270,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd54d0"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd54d1"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd54d2"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54d3"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd54d4"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd54d5"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd54d6"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd54d7"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd54d8"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54d9"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54da"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd54cf"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 271,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54dc"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd54dd"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54de"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd54df"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd54e0"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd54e1"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd54e2"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd54e3"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd54e4"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54e5"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd54e6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd54db"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "272",
        "name": "Huỳnh Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "10614922"
      },
      "customer": {
        "customerID": "272",
        "name": "Phan Hữu Duy",
        "phone": "86491112",
        "address": "Hà Nội",
        "cmnd": "94209707"
      },
      "fileURL": "talk272.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "319s",
      "date": "3/4/2022",
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
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd550d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd550c"
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
              "_id": "62ebc0e08a312c984bbd550f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd550e"
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
              "_id": "62ebc0e08a312c984bbd5511"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5510"
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
              "_id": "62ebc0e08a312c984bbd5513"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5512"
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
              "_id": "62ebc0e08a312c984bbd5515"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5514"
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
              "_id": "62ebc0e08a312c984bbd5517"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5516"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd54f3",
    "audioID": 272,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 271,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd54f5"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd54f6"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd54f7"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd54f8"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd54f9"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd54fa"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54fb"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54fc"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd54fd"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd54fe"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd54ff"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd54f4"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 272,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5501"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5502"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5503"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5504"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5505"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5506"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5507"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5508"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5509"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd550a"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd550b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5500"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "273",
        "name": "Trần Hải Dạ",
        "cty": "ABC",
        "hotline": "93988829"
      },
      "customer": {
        "customerID": "273",
        "name": "Bùi Thị Cảnh",
        "phone": "96077624",
        "address": "Hà Nội",
        "cmnd": "27249002"
      },
      "fileURL": "talk273.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "513s",
      "date": "8/9/2022",
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
              "_id": "62ebc0e08a312c984bbd5532"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5531"
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
              "_id": "62ebc0e08a312c984bbd5534"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5533"
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
              "_id": "62ebc0e08a312c984bbd5536"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5535"
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
              "_id": "62ebc0e08a312c984bbd5538"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5537"
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
              "_id": "62ebc0e08a312c984bbd553a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5539"
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
              "_id": "62ebc0e08a312c984bbd553c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd553b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5518",
    "audioID": 273,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 272,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd551a"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd551b"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd551c"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd551d"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd551e"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd551f"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5520"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5521"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5522"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5523"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5524"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5519"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 273,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5526"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5527"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5528"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5529"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd552a"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd552b"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd552c"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd552d"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd552e"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd552f"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5530"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5525"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "274",
        "name": "Huỳnh Thị An",
        "cty": "ABC",
        "hotline": "18314681"
      },
      "customer": {
        "customerID": "274",
        "name": "Phan Phương An",
        "phone": "72735640",
        "address": "Hà Nội",
        "cmnd": "49895883"
      },
      "fileURL": "talk274.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "493s",
      "date": "13/3/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5557"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5556"
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
              "_id": "62ebc0e08a312c984bbd5559"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5558"
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
              "_id": "62ebc0e08a312c984bbd555b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd555a"
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
              "_id": "62ebc0e08a312c984bbd555d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd555c"
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
              "_id": "62ebc0e08a312c984bbd555f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd555e"
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
              "_id": "62ebc0e08a312c984bbd5561"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5560"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd553d",
    "audioID": 274,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 273,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd553f"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5540"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5541"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5542"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5543"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5544"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5545"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5546"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5547"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5548"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5549"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd553e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 274,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd554b"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd554c"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd554d"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd554e"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd554f"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5550"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5551"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5552"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5553"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5554"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5555"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd554a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "275",
        "name": "Lê Dương Hồng",
        "cty": "ABC",
        "hotline": "99216574"
      },
      "customer": {
        "customerID": "275",
        "name": "Phan Thị Dạ",
        "phone": "94893487",
        "address": "Hà Nội",
        "cmnd": "37912517"
      },
      "fileURL": "talk275.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "177s",
      "date": "6/2/2022",
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
              "_id": "62ebc0e08a312c984bbd557c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd557b"
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
              "_id": "62ebc0e08a312c984bbd557e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd557d"
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
              "_id": "62ebc0e08a312c984bbd5580"
            }
          ],
          "_id": "62ebc0e08a312c984bbd557f"
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
              "_id": "62ebc0e08a312c984bbd5582"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5581"
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
              "_id": "62ebc0e08a312c984bbd5584"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5583"
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
              "_id": "62ebc0e08a312c984bbd5586"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5585"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5562",
    "audioID": 275,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 274,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5564"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5565"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5566"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5567"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5568"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5569"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd556a"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd556b"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd556c"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd556d"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd556e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5563"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 275,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5570"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5571"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5572"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5573"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5574"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5575"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5576"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5577"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5578"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5579"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd557a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd556f"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "276",
        "name": "Nguyễn Văn Lợi",
        "cty": "ABC",
        "hotline": "98734276"
      },
      "customer": {
        "customerID": "276",
        "name": "Nguyễn Hữu Dạ",
        "phone": "74222281",
        "address": "Hà Nội",
        "cmnd": "80693121"
      },
      "fileURL": "talk276.mp3",
      "type": "audio",
      "callHoldDration": "3s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd55a1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55a0"
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
              "_id": "62ebc0e08a312c984bbd55a3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55a2"
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
              "_id": "62ebc0e08a312c984bbd55a5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55a4"
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
              "_id": "62ebc0e08a312c984bbd55a7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55a6"
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
              "_id": "62ebc0e08a312c984bbd55a9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55a8"
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
              "_id": "62ebc0e08a312c984bbd55ab"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55aa"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5587",
    "audioID": 276,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 275,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5589"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd558a"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd558b"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd558c"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd558d"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd558e"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd558f"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5590"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5591"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5592"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5593"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5588"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 276,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5595"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5596"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5597"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5598"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5599"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd559a"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd559b"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd559c"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd559d"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd559e"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd559f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5594"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "277",
        "name": "Đặng Phương Ánh",
        "cty": "ABC",
        "hotline": "25390908"
      },
      "customer": {
        "customerID": "277",
        "name": "Ngô Văn Duy",
        "phone": "46593937",
        "address": "Hà Nội",
        "cmnd": "87093286"
      },
      "fileURL": "talk277.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "310s",
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
                "quá hạn"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd55c6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55c5"
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
              "_id": "62ebc0e08a312c984bbd55c8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55c7"
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
              "_id": "62ebc0e08a312c984bbd55ca"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55c9"
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
              "_id": "62ebc0e08a312c984bbd55cc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55cb"
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
              "_id": "62ebc0e08a312c984bbd55ce"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55cd"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd55d0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55cf"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd55ac",
    "audioID": 277,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 276,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd55ae"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd55af"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd55b0"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd55b1"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd55b2"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd55b3"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd55b4"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd55b5"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd55b6"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd55b7"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd55b8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd55ad"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 277,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd55ba"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd55bb"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd55bc"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd55bd"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd55be"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd55bf"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd55c0"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd55c1"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd55c2"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd55c3"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd55c4"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd55b9"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "278",
        "name": "Lê Quốc Cảnh",
        "cty": "ABC",
        "hotline": "49556464"
      },
      "customer": {
        "customerID": "278",
        "name": "Ngô Phương Hồng",
        "phone": "60217467",
        "address": "Hà Nội",
        "cmnd": "13004881"
      },
      "fileURL": "talk278.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "56s",
      "date": "22/12/2022",
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
              "_id": "62ebc0e08a312c984bbd55eb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55ea"
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
              "_id": "62ebc0e08a312c984bbd55ed"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55ec"
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
              "_id": "62ebc0e08a312c984bbd55ef"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55ee"
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
              "_id": "62ebc0e08a312c984bbd55f1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55f0"
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
              "_id": "62ebc0e08a312c984bbd55f3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55f2"
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
              "_id": "62ebc0e08a312c984bbd55f5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd55f4"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd55d1",
    "audioID": 278,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 277,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd55d3"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd55d4"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd55d5"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd55d6"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd55d7"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd55d8"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd55d9"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd55da"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd55db"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd55dc"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd55dd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd55d2"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 278,
          "text": [
            {
              "duration": 0,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd55df"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd55e0"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd55e1"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd55e2"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd55e3"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd55e4"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd55e5"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd55e6"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd55e7"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd55e8"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd55e9"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd55de"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "279",
        "name": "Bùi Minh Dạ",
        "cty": "ABC",
        "hotline": "31053265"
      },
      "customer": {
        "customerID": "279",
        "name": "Bùi Khánh Hồng",
        "phone": "81087573",
        "address": "Hà Nội",
        "cmnd": "63476358"
      },
      "fileURL": "talk279.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "498s",
      "date": "7/7/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5610"
            }
          ],
          "_id": "62ebc0e08a312c984bbd560f"
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
              "_id": "62ebc0e08a312c984bbd5612"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5611"
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
              "_id": "62ebc0e08a312c984bbd5614"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5613"
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
              "_id": "62ebc0e08a312c984bbd5616"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5615"
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
              "_id": "62ebc0e08a312c984bbd5618"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5617"
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
              "_id": "62ebc0e08a312c984bbd561a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5619"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd55f6",
    "audioID": 279,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 278,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd55f8"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd55f9"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd55fa"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd55fb"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd55fc"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd55fd"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd55fe"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd55ff"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5600"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5601"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5602"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd55f7"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 279,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5604"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5605"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5606"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5607"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5608"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5609"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd560a"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd560b"
            },
            {
              "duration": 8,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd560c"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd560d"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd560e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5603"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "280",
        "name": "Phạm Minh Hồng",
        "cty": "ABC",
        "hotline": "80533097"
      },
      "customer": {
        "customerID": "280",
        "name": "Trương Hữu Dạ",
        "phone": "22238104",
        "address": "Hà Nội",
        "cmnd": "85775956"
      },
      "fileURL": "talk280.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "582s",
      "date": "30/11/2022",
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
              "_id": "62ebc0e08a312c984bbd5635"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5634"
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
              "_id": "62ebc0e08a312c984bbd5637"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5636"
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
              "_id": "62ebc0e08a312c984bbd5639"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5638"
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
              "_id": "62ebc0e08a312c984bbd563b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd563a"
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
              "_id": "62ebc0e08a312c984bbd563d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd563c"
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
              "_id": "62ebc0e08a312c984bbd563f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd563e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd561b",
    "audioID": 280,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 279,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd561d"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd561e"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd561f"
            },
            {
              "duration": 3,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5620"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5621"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5622"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5623"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5624"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5625"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5626"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5627"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd561c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 280,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5629"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd562a"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd562b"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd562c"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd562d"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd562e"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd562f"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5630"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5631"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5632"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5633"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5628"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "281",
        "name": "Phan Phương Duy",
        "cty": "ABC",
        "hotline": "70565064"
      },
      "customer": {
        "customerID": "281",
        "name": "Nguyễn Dương Khánh",
        "phone": "16161096",
        "address": "Hà Nội",
        "cmnd": "95961456"
      },
      "fileURL": "talk281.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "337s",
      "date": "18/3/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd565a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5659"
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
              "_id": "62ebc0e08a312c984bbd565c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd565b"
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
              "_id": "62ebc0e08a312c984bbd565e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd565d"
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
              "_id": "62ebc0e08a312c984bbd5660"
            }
          ],
          "_id": "62ebc0e08a312c984bbd565f"
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
              "_id": "62ebc0e08a312c984bbd5662"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5661"
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
              "_id": "62ebc0e08a312c984bbd5664"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5663"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5640",
    "audioID": 281,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 280,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5642"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5643"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5644"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5645"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5646"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5647"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5648"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5649"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd564a"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd564b"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd564c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5641"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 281,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd564e"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd564f"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5650"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5651"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5652"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5653"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5654"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5655"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5656"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5657"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5658"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd564d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "282",
        "name": "Phan Thị Khánh",
        "cty": "ABC",
        "hotline": "56996263"
      },
      "customer": {
        "customerID": "282",
        "name": "Trương Thị Khánh",
        "phone": "56325785",
        "address": "Hà Nội",
        "cmnd": "19351186"
      },
      "fileURL": "talk282.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "152s",
      "date": "28/8/2022",
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
              "_id": "62ebc0e08a312c984bbd567f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd567e"
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
              "_id": "62ebc0e08a312c984bbd5681"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5680"
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
              "_id": "62ebc0e08a312c984bbd5683"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5682"
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
              "_id": "62ebc0e08a312c984bbd5685"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5684"
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
              "_id": "62ebc0e08a312c984bbd5687"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5686"
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
              "_id": "62ebc0e08a312c984bbd5689"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5688"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5665",
    "audioID": 282,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 281,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5667"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5668"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5669"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd566a"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd566b"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd566c"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd566d"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd566e"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd566f"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5670"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5671"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5666"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 282,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5673"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5674"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5675"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5676"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5677"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5678"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5679"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd567a"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd567b"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd567c"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd567d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5672"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "283",
        "name": "Nguyễn Hữu Duy",
        "cty": "ABC",
        "hotline": "44123869"
      },
      "customer": {
        "customerID": "283",
        "name": "Phan Minh Ánh",
        "phone": "20910751",
        "address": "Hà Nội",
        "cmnd": "65917621"
      },
      "fileURL": "talk283.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "292s",
      "date": "14/2/2022",
      "time_start": "10:40:20"
    },
    "audioMatch": {
      "rules": [
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "vay"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd56a4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56a3"
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
              "_id": "62ebc0e08a312c984bbd56a6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56a5"
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
              "_id": "62ebc0e08a312c984bbd56a8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56a7"
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
              "_id": "62ebc0e08a312c984bbd56aa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56a9"
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
              "_id": "62ebc0e08a312c984bbd56ac"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56ab"
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
              "_id": "62ebc0e08a312c984bbd56ae"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56ad"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd568a",
    "audioID": 283,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 282,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd568c"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd568d"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd568e"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd568f"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5690"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5691"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5692"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5693"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5694"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5695"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5696"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd568b"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 283,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5698"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5699"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd569a"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd569b"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd569c"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd569d"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd569e"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd569f"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd56a0"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd56a1"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd56a2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5697"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "284",
        "name": "Lê Minh An",
        "cty": "ABC",
        "hotline": "52209034"
      },
      "customer": {
        "customerID": "284",
        "name": "Ngô Khánh Dạ",
        "phone": "30333167",
        "address": "Hà Nội",
        "cmnd": "72248775"
      },
      "fileURL": "talk284.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "480s",
      "date": "24/10/2022",
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
              "_id": "62ebc0e08a312c984bbd56c9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56c8"
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
              "_id": "62ebc0e08a312c984bbd56cb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56ca"
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
              "_id": "62ebc0e08a312c984bbd56cd"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56cc"
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
              "_id": "62ebc0e08a312c984bbd56cf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56ce"
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
              "_id": "62ebc0e08a312c984bbd56d1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56d0"
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
              "_id": "62ebc0e08a312c984bbd56d3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56d2"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd56af",
    "audioID": 284,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 283,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd56b1"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd56b2"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd56b3"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd56b4"
            },
            {
              "duration": 4,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd56b5"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd56b6"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd56b7"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd56b8"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd56b9"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd56ba"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd56bb"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd56b0"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 284,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd56bd"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd56be"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd56bf"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd56c0"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd56c1"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd56c2"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd56c3"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd56c4"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd56c5"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd56c6"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd56c7"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd56bc"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "285",
        "name": "Lê Khánh Thái Qúy",
        "cty": "ABC",
        "hotline": "65437270"
      },
      "customer": {
        "customerID": "285",
        "name": "Đặng Dương Lợi",
        "phone": "20782445",
        "address": "Hà Nội",
        "cmnd": "99984223"
      },
      "fileURL": "talk285.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "249s",
      "date": "14/9/2022",
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
              "_id": "62ebc0e08a312c984bbd56ee"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56ed"
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
              "_id": "62ebc0e08a312c984bbd56f0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56ef"
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
              "_id": "62ebc0e08a312c984bbd56f2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56f1"
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
              "_id": "62ebc0e08a312c984bbd56f4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56f3"
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
              "_id": "62ebc0e08a312c984bbd56f6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56f5"
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
              "_id": "62ebc0e08a312c984bbd56f8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd56f7"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd56d4",
    "audioID": 285,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 284,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd56d6"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd56d7"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd56d8"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd56d9"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd56da"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd56db"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd56dc"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd56dd"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd56de"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd56df"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd56e0"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd56d5"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 285,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd56e2"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd56e3"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd56e4"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd56e5"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd56e6"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd56e7"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd56e8"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd56e9"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd56ea"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd56eb"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd56ec"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd56e1"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "286",
        "name": "Nguyễn Phương Hồng",
        "cty": "ABC",
        "hotline": "36258939"
      },
      "customer": {
        "customerID": "286",
        "name": "Ngô Khánh Quyền",
        "phone": "58119740",
        "address": "Hà Nội",
        "cmnd": "99490974"
      },
      "fileURL": "talk286.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "425s",
      "date": "4/6/2022",
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
              "_id": "62ebc0e08a312c984bbd5713"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5712"
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
              "_id": "62ebc0e08a312c984bbd5715"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5714"
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
              "_id": "62ebc0e08a312c984bbd5717"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5716"
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
              "_id": "62ebc0e08a312c984bbd5719"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5718"
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
              "_id": "62ebc0e08a312c984bbd571b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd571a"
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
              "_id": "62ebc0e08a312c984bbd571d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd571c"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd56f9",
    "audioID": 286,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 285,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd56fb"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd56fc"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd56fd"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd56fe"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd56ff"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5700"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5701"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5702"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5703"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5704"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5705"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd56fa"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 286,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5707"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5708"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5709"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd570a"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd570b"
            },
            {
              "duration": 5,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd570c"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd570d"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd570e"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd570f"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5710"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5711"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5706"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "287",
        "name": "Trương Minh Hồng",
        "cty": "ABC",
        "hotline": "96783262"
      },
      "customer": {
        "customerID": "287",
        "name": "Trần An Khánh",
        "phone": "35291954",
        "address": "Hà Nội",
        "cmnd": "76429118"
      },
      "fileURL": "talk287.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "357s",
      "date": "10/8/2022",
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
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5738"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5737"
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
              "_id": "62ebc0e08a312c984bbd573a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5739"
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
              "_id": "62ebc0e08a312c984bbd573c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd573b"
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
              "_id": "62ebc0e08a312c984bbd573e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd573d"
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
              "_id": "62ebc0e08a312c984bbd5740"
            }
          ],
          "_id": "62ebc0e08a312c984bbd573f"
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
              "_id": "62ebc0e08a312c984bbd5742"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5741"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd571e",
    "audioID": 287,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 286,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5720"
            },
            {
              "duration": 1,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5721"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5722"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5723"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5724"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5725"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5726"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5727"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5728"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5729"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd572a"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd571f"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 287,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd572c"
            },
            {
              "duration": 1,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd572d"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd572e"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd572f"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5730"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5731"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5732"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5733"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5734"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5735"
            },
            {
              "duration": 10,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5736"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd572b"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "288",
        "name": "Trần Hữu Thái Qúy",
        "cty": "ABC",
        "hotline": "92331562"
      },
      "customer": {
        "customerID": "288",
        "name": "Phạm Hữu An",
        "phone": "60741325",
        "address": "Hà Nội",
        "cmnd": "42876038"
      },
      "fileURL": "talk288.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "194s",
      "date": "13/5/2022",
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
              "_id": "62ebc0e08a312c984bbd575d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd575c"
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
              "_id": "62ebc0e08a312c984bbd575f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd575e"
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
              "_id": "62ebc0e08a312c984bbd5761"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5760"
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
              "_id": "62ebc0e08a312c984bbd5763"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5762"
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
              "_id": "62ebc0e08a312c984bbd5765"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5764"
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
              "_id": "62ebc0e08a312c984bbd5767"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5766"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5743",
    "audioID": 288,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 287,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5745"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5746"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5747"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5748"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5749"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd574a"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd574b"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd574c"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd574d"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd574e"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd574f"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5744"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 288,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5751"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5752"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5753"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5754"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5755"
            },
            {
              "duration": 5,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5756"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5757"
            },
            {
              "duration": 7,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5758"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5759"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd575a"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd575b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5750"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "289",
        "name": "Huỳnh Quốc Lợi",
        "cty": "ABC",
        "hotline": "28977551"
      },
      "customer": {
        "customerID": "289",
        "name": "Ngô Hữu Quyền",
        "phone": "65962416",
        "address": "Hà Nội",
        "cmnd": "45967885"
      },
      "fileURL": "talk289.mp3",
      "type": "audio",
      "callHoldDration": "4s",
      "callDuration": "431s",
      "date": "19/9/2022",
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
              "_id": "62ebc0e08a312c984bbd5782"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5781"
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
              "_id": "62ebc0e08a312c984bbd5784"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5783"
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
              "_id": "62ebc0e08a312c984bbd5786"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5785"
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
              "_id": "62ebc0e08a312c984bbd5788"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5787"
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
              "_id": "62ebc0e08a312c984bbd578a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5789"
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
              "_id": "62ebc0e08a312c984bbd578c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd578b"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5768",
    "audioID": 289,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 288,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd576a"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd576b"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd576c"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd576d"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd576e"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd576f"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5770"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5771"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5772"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5773"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5774"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5769"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 289,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5776"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5777"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5778"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5779"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd577a"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd577b"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd577c"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd577d"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd577e"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd577f"
            },
            {
              "duration": 10,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5780"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5775"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "290",
        "name": "Trương Khánh Thái Qúy",
        "cty": "ABC",
        "hotline": "13842677"
      },
      "customer": {
        "customerID": "290",
        "name": "Bùi Văn Duy",
        "phone": "12883828",
        "address": "Hà Nội",
        "cmnd": "17495933"
      },
      "fileURL": "talk290.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "344s",
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
                "quá hạn"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd57a7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57a6"
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
              "_id": "62ebc0e08a312c984bbd57a9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57a8"
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
              "_id": "62ebc0e08a312c984bbd57ab"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57aa"
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
              "_id": "62ebc0e08a312c984bbd57ad"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57ac"
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
              "_id": "62ebc0e08a312c984bbd57af"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57ae"
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
              "_id": "62ebc0e08a312c984bbd57b1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57b0"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd578d",
    "audioID": 290,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 289,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd578f"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5790"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5791"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5792"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5793"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5794"
            },
            {
              "duration": 6,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5795"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5796"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5797"
            },
            {
              "duration": 9,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5798"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5799"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd578e"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 290,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd579b"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd579c"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd579d"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd579e"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd579f"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd57a0"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd57a1"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd57a2"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd57a3"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd57a4"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd57a5"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd579a"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "291",
        "name": "Phan Hải Cảnh",
        "cty": "ABC",
        "hotline": "93106428"
      },
      "customer": {
        "customerID": "291",
        "name": "Ngô Phương Cảnh",
        "phone": "42330439",
        "address": "Hà Nội",
        "cmnd": "85035877"
      },
      "fileURL": "talk291.mp3",
      "type": "audio",
      "callHoldDration": "3s",
      "callDuration": "46s",
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
                "chưa trả"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd57cc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57cb"
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
              "_id": "62ebc0e08a312c984bbd57ce"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57cd"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd57d0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57cf"
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
              "_id": "62ebc0e08a312c984bbd57d2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57d1"
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
              "_id": "62ebc0e08a312c984bbd57d4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57d3"
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
              "_id": "62ebc0e08a312c984bbd57d6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57d5"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd57b2",
    "audioID": 291,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 290,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd57b4"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd57b5"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd57b6"
            },
            {
              "duration": 3,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd57b7"
            },
            {
              "duration": 4,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd57b8"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd57b9"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd57ba"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd57bb"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd57bc"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd57bd"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd57be"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd57b3"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 291,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd57c0"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd57c1"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd57c2"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd57c3"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd57c4"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd57c5"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd57c6"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd57c7"
            },
            {
              "duration": 8,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd57c8"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd57c9"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd57ca"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd57bf"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "292",
        "name": "Huỳnh Khánh Lợi",
        "cty": "ABC",
        "hotline": "64520398"
      },
      "customer": {
        "customerID": "292",
        "name": "Ngô Hải Cảnh",
        "phone": "59872981",
        "address": "Hà Nội",
        "cmnd": "63406430"
      },
      "fileURL": "talk292.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "247s",
      "date": "29/1/2022",
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
              "_id": "62ebc0e08a312c984bbd57f1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57f0"
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
              "_id": "62ebc0e08a312c984bbd57f3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57f2"
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
              "_id": "62ebc0e08a312c984bbd57f5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57f4"
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
              "_id": "62ebc0e08a312c984bbd57f7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57f6"
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
              "_id": "62ebc0e08a312c984bbd57f9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57f8"
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
              "_id": "62ebc0e08a312c984bbd57fb"
            }
          ],
          "_id": "62ebc0e08a312c984bbd57fa"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd57d7",
    "audioID": 292,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 291,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd57d9"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd57da"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd57db"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd57dc"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd57dd"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd57de"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd57df"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd57e0"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd57e1"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd57e2"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd57e3"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd57d8"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 292,
          "text": [
            {
              "duration": 0,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd57e5"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd57e6"
            },
            {
              "duration": 2,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd57e7"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd57e8"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd57e9"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd57ea"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd57eb"
            },
            {
              "duration": 7,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd57ec"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd57ed"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd57ee"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd57ef"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd57e4"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "293",
        "name": "Lê Quốc Dạ",
        "cty": "ABC",
        "hotline": "36724514"
      },
      "customer": {
        "customerID": "293",
        "name": "Trần Quốc Quyền",
        "phone": "46062306",
        "address": "Hà Nội",
        "cmnd": "58573634"
      },
      "fileURL": "talk293.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "51s",
      "date": "7/1/2022",
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
              "_id": "62ebc0e08a312c984bbd5816"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5815"
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
              "_id": "62ebc0e08a312c984bbd5818"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5817"
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
              "_id": "62ebc0e08a312c984bbd581a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5819"
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
              "_id": "62ebc0e08a312c984bbd581c"
            }
          ],
          "_id": "62ebc0e08a312c984bbd581b"
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
              "_id": "62ebc0e08a312c984bbd581e"
            }
          ],
          "_id": "62ebc0e08a312c984bbd581d"
        },
        {
          "name": "CollAgentScriptAdherence",
          "key": [
            {
              "agent": [
                
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5820"
            }
          ],
          "_id": "62ebc0e08a312c984bbd581f"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd57fc",
    "audioID": 293,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 292,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd57fe"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd57ff"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5800"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5801"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5802"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5803"
            },
            {
              "duration": 6,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5804"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5805"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5806"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5807"
            },
            {
              "duration": 10,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5808"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd57fd"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 293,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd580a"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd580b"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd580c"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd580d"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd580e"
            },
            {
              "duration": 5,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd580f"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5810"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5811"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5812"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5813"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5814"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5809"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "294",
        "name": "Huỳnh Thị Thái Qúy",
        "cty": "ABC",
        "hotline": "17795416"
      },
      "customer": {
        "customerID": "294",
        "name": "Phạm Minh Dạ",
        "phone": "94698465",
        "address": "Hà Nội",
        "cmnd": "52714183"
      },
      "fileURL": "talk294.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "229s",
      "date": "11/7/2022",
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
              "_id": "62ebc0e08a312c984bbd583b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd583a"
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
              "_id": "62ebc0e08a312c984bbd583d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd583c"
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
              "_id": "62ebc0e08a312c984bbd583f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd583e"
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
              "_id": "62ebc0e08a312c984bbd5841"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5840"
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
              "_id": "62ebc0e08a312c984bbd5843"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5842"
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
              "_id": "62ebc0e08a312c984bbd5845"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5844"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5821",
    "audioID": 294,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 293,
          "text": [
            {
              "duration": 0,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5823"
            },
            {
              "duration": 1,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5824"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5825"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5826"
            },
            {
              "duration": 4,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5827"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5828"
            },
            {
              "duration": 6,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5829"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd582a"
            },
            {
              "duration": 8,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd582b"
            },
            {
              "duration": 9,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd582c"
            },
            {
              "duration": 10,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd582d"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5822"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 294,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd582f"
            },
            {
              "duration": 1,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5830"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5831"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5832"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5833"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5834"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5835"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5836"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5837"
            },
            {
              "duration": 9,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5838"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5839"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd582e"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "295",
        "name": "Đặng Khánh Dạ",
        "cty": "ABC",
        "hotline": "80694922"
      },
      "customer": {
        "customerID": "295",
        "name": "Huỳnh Khánh Hồng",
        "phone": "27705654",
        "address": "Hà Nội",
        "cmnd": "31696783"
      },
      "fileURL": "talk295.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "307s",
      "date": "14/7/2022",
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
              "_id": "62ebc0e08a312c984bbd5860"
            }
          ],
          "_id": "62ebc0e08a312c984bbd585f"
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
              "_id": "62ebc0e08a312c984bbd5862"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5861"
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
              "_id": "62ebc0e08a312c984bbd5864"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5863"
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
              "_id": "62ebc0e08a312c984bbd5866"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5865"
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
              "_id": "62ebc0e08a312c984bbd5868"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5867"
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
              "_id": "62ebc0e08a312c984bbd586a"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5869"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5846",
    "audioID": 295,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 294,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5848"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5849"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd584a"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd584b"
            },
            {
              "duration": 4,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd584c"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd584d"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd584e"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd584f"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd5850"
            },
            {
              "duration": 9,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5851"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5852"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5847"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 295,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5854"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5855"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5856"
            },
            {
              "duration": 3,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5857"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5858"
            },
            {
              "duration": 5,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5859"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd585a"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd585b"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd585c"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd585d"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd585e"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5853"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "296",
        "name": "Đặng Quốc Quyền",
        "cty": "ABC",
        "hotline": "19587104"
      },
      "customer": {
        "customerID": "296",
        "name": "Phạm Hải Duy",
        "phone": "80479827",
        "address": "Hà Nội",
        "cmnd": "43026490"
      },
      "fileURL": "talk296.mp3",
      "type": "audio",
      "callHoldDration": "2s",
      "callDuration": "306s",
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
                "chưa thanh toán"
              ],
              "customer": [
                "đâu biết"
              ],
              "_id": "62ebc0e08a312c984bbd5885"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5884"
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
              "_id": "62ebc0e08a312c984bbd5887"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5886"
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
              "_id": "62ebc0e08a312c984bbd5889"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5888"
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
              "_id": "62ebc0e08a312c984bbd588b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd588a"
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
              "_id": "62ebc0e08a312c984bbd588d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd588c"
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
              "_id": "62ebc0e08a312c984bbd588f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd588e"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd586b",
    "audioID": 296,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 295,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd586d"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd586e"
            },
            {
              "duration": 2,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd586f"
            },
            {
              "duration": 3,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5870"
            },
            {
              "duration": 4,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5871"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5872"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5873"
            },
            {
              "duration": 7,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5874"
            },
            {
              "duration": 8,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5875"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5876"
            },
            {
              "duration": 10,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5877"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd586c"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 296,
          "text": [
            {
              "duration": 0,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5879"
            },
            {
              "duration": 1,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd587a"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd587b"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd587c"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd587d"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd587e"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd587f"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5880"
            },
            {
              "duration": 8,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5881"
            },
            {
              "duration": 9,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5882"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5883"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5878"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "297",
        "name": "Trần Phương Thái Qúy",
        "cty": "ABC",
        "hotline": "81381690"
      },
      "customer": {
        "customerID": "297",
        "name": "Trần Minh Dạ",
        "phone": "76809238",
        "address": "Hà Nội",
        "cmnd": "95721313"
      },
      "fileURL": "talk297.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "591s",
      "date": "31/5/2022",
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
              "_id": "62ebc0e08a312c984bbd58aa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58a9"
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
              "_id": "62ebc0e08a312c984bbd58ac"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58ab"
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
              "_id": "62ebc0e08a312c984bbd58ae"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58ad"
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
              "_id": "62ebc0e08a312c984bbd58b0"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58af"
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
              "_id": "62ebc0e08a312c984bbd58b2"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58b1"
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
              "_id": "62ebc0e08a312c984bbd58b4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58b3"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd5890",
    "audioID": 297,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 296,
          "text": [
            {
              "duration": 0,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd5892"
            },
            {
              "duration": 1,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5893"
            },
            {
              "duration": 2,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5894"
            },
            {
              "duration": 3,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5895"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5896"
            },
            {
              "duration": 5,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5897"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd5898"
            },
            {
              "duration": 7,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5899"
            },
            {
              "duration": 8,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd589a"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd589b"
            },
            {
              "duration": 10,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd589c"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5891"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 297,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd589e"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd589f"
            },
            {
              "duration": 2,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd58a0"
            },
            {
              "duration": 3,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd58a1"
            },
            {
              "duration": 4,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58a2"
            },
            {
              "duration": 5,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd58a3"
            },
            {
              "duration": 6,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd58a4"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd58a5"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58a6"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58a7"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd58a8"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd589d"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "298",
        "name": "Nguyễn Thị An",
        "cty": "ABC",
        "hotline": "53488230"
      },
      "customer": {
        "customerID": "298",
        "name": "Lê Quốc Thái Qúy",
        "phone": "56219607",
        "address": "Hà Nội",
        "cmnd": "69607566"
      },
      "fileURL": "talk298.mp3",
      "type": "audio",
      "callHoldDration": "1s",
      "callDuration": "389s",
      "date": "26/9/2022",
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
              "_id": "62ebc0e08a312c984bbd58cf"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58ce"
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
              "_id": "62ebc0e08a312c984bbd58d1"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58d0"
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
              "_id": "62ebc0e08a312c984bbd58d3"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58d2"
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
              "_id": "62ebc0e08a312c984bbd58d5"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58d4"
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
              "_id": "62ebc0e08a312c984bbd58d7"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58d6"
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
              "_id": "62ebc0e08a312c984bbd58d9"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58d8"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd58b5",
    "audioID": 298,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 297,
          "text": [
            {
              "duration": 0,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd58b7"
            },
            {
              "duration": 1,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd58b8"
            },
            {
              "duration": 2,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd58b9"
            },
            {
              "duration": 3,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd58ba"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd58bb"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd58bc"
            },
            {
              "duration": 6,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd58bd"
            },
            {
              "duration": 7,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd58be"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58bf"
            },
            {
              "duration": 9,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58c0"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd58c1"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd58b6"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 298,
          "text": [
            {
              "duration": 0,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd58c3"
            },
            {
              "duration": 1,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd58c4"
            },
            {
              "duration": 2,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd58c5"
            },
            {
              "duration": 3,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd58c6"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd58c7"
            },
            {
              "duration": 5,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd58c8"
            },
            {
              "duration": 6,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd58c9"
            },
            {
              "duration": 7,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd58ca"
            },
            {
              "duration": 8,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd58cb"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd58cc"
            },
            {
              "duration": 10,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd58cd"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd58c2"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "299",
        "name": "Huỳnh Khánh Khánh",
        "cty": "ABC",
        "hotline": "87092285"
      },
      "customer": {
        "customerID": "299",
        "name": "Trương Thị Dạ",
        "phone": "36668497",
        "address": "Hà Nội",
        "cmnd": "82379424"
      },
      "fileURL": "talk299.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "142s",
      "date": "16/10/2022",
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
              "_id": "62ebc0e08a312c984bbd58f4"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58f3"
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
              "_id": "62ebc0e08a312c984bbd58f6"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58f5"
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
              "_id": "62ebc0e08a312c984bbd58f8"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58f7"
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
              "_id": "62ebc0e08a312c984bbd58fa"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58f9"
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
              "_id": "62ebc0e08a312c984bbd58fc"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58fb"
        },
        {
          "name": "NotifyPayment DueDate",
          "key": [
            {
              "agent": [
                "nợ"
              ],
              "customer": [
                "đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd58fe"
            }
          ],
          "_id": "62ebc0e08a312c984bbd58fd"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd58da",
    "audioID": 299,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 298,
          "text": [
            {
              "duration": 0,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd58dc"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58dd"
            },
            {
              "duration": 2,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd58de"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58df"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd58e0"
            },
            {
              "duration": 5,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58e1"
            },
            {
              "duration": 6,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd58e2"
            },
            {
              "duration": 7,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd58e3"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58e4"
            },
            {
              "duration": 9,
              "content": "tôi xin gác mà anh",
              "_id": "62ebc0e08a312c984bbd58e5"
            },
            {
              "duration": 10,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd58e6"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd58db"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 299,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd58e8"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58e9"
            },
            {
              "duration": 2,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd58ea"
            },
            {
              "duration": 3,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd58eb"
            },
            {
              "duration": 4,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd58ec"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd58ed"
            },
            {
              "duration": 6,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd58ee"
            },
            {
              "duration": 7,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd58ef"
            },
            {
              "duration": 8,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd58f0"
            },
            {
              "duration": 9,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd58f1"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd58f2"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd58e7"
      }
    ],
    "__v": 0
  },
  {
    "audioCredit": {
      "agent": {
        "agentID": "300",
        "name": "Trương Hải Cảnh",
        "cty": "ABC",
        "hotline": "29998153"
      },
      "customer": {
        "customerID": "300",
        "name": "Lê An Ánh",
        "phone": "44297726",
        "address": "Hà Nội",
        "cmnd": "40009752"
      },
      "fileURL": "talk300.mp3",
      "type": "audio",
      "callHoldDration": "5s",
      "callDuration": "530s",
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
                "nợ"
              ],
              "customer": [
                "anh đâu biết đâu"
              ],
              "_id": "62ebc0e08a312c984bbd5919"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5918"
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
              "_id": "62ebc0e08a312c984bbd591b"
            }
          ],
          "_id": "62ebc0e08a312c984bbd591a"
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
              "_id": "62ebc0e08a312c984bbd591d"
            }
          ],
          "_id": "62ebc0e08a312c984bbd591c"
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
              "_id": "62ebc0e08a312c984bbd591f"
            }
          ],
          "_id": "62ebc0e08a312c984bbd591e"
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
              "_id": "62ebc0e08a312c984bbd5921"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5920"
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
              "_id": "62ebc0e08a312c984bbd5923"
            }
          ],
          "_id": "62ebc0e08a312c984bbd5922"
        }
      ]
    },
    "_id": "62ebc0e08a312c984bbd58ff",
    "audioID": 300,
    "audioText": [
      {
        "voiceLayer": {
          "voiceNumber": "First",
          "voicePrediction": 299,
          "text": [
            {
              "duration": 0,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5901"
            },
            {
              "duration": 1,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5902"
            },
            {
              "duration": 2,
              "content": "dạ anh đang có vay bênh bênh em ạ",
              "_id": "62ebc0e08a312c984bbd5903"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5904"
            },
            {
              "duration": 4,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd5905"
            },
            {
              "duration": 5,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd5906"
            },
            {
              "duration": 6,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5907"
            },
            {
              "duration": 7,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5908"
            },
            {
              "duration": 8,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5909"
            },
            {
              "duration": 9,
              "content": "rồi anh đợi em đăng ký chính chủ chưa",
              "_id": "62ebc0e08a312c984bbd590a"
            },
            {
              "duration": 10,
              "content": "nó được tháng ròi",
              "_id": "62ebc0e08a312c984bbd590b"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd5900"
      },
      {
        "voiceLayer": {
          "voiceNumber": "Second",
          "voicePrediction": 300,
          "text": [
            {
              "duration": 0,
              "content": "xin chào",
              "_id": "62ebc0e08a312c984bbd590d"
            },
            {
              "duration": 1,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd590e"
            },
            {
              "duration": 2,
              "content": "phải",
              "_id": "62ebc0e08a312c984bbd590f"
            },
            {
              "duration": 3,
              "content": "em một xíu",
              "_id": "62ebc0e08a312c984bbd5910"
            },
            {
              "duration": 4,
              "content": "ừ",
              "_id": "62ebc0e08a312c984bbd5911"
            },
            {
              "duration": 5,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5912"
            },
            {
              "duration": 6,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5913"
            },
            {
              "duration": 7,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5914"
            },
            {
              "duration": 8,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5915"
            },
            {
              "duration": 9,
              "content": "thì anh đi chứ anh đâu biết đâu",
              "_id": "62ebc0e08a312c984bbd5916"
            },
            {
              "duration": 10,
              "content": "đợi",
              "_id": "62ebc0e08a312c984bbd5917"
            }
          ]
        },
        "_id": "62ebc0e08a312c984bbd590c"
      }
    ],
    "__v": 0
  }
]

export default FILE3