function kakaoShare() {
  Kakao.API.request({
    url: '/v2/api/talk/memo/default/send',
    data: {
      template_object: {
        object_type: 'feed',
        content: {
          title: '카카오톡 링크 4.0',
          description: '디폴트 템플릿 FEED',
          image_url:
            'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            web_url: 'https://developers.kakao.com',
            mobile_web_url: 'https://developers.kakao.com',
          },
        },
        social: {
          like_count: 100,
          comment_count: 200,
        },
        button_title: '바로 확인',
      },
    },
    success: function(response) {
      console.log(response);
    },
    fail: function(error) {
      console.log(error);
    },
  });
}
