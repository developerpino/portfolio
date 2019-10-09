# 저는 AB 개발자 입니다.
2017년 9월 19일 phpschool 이라는 개발자 커뮤니티 포럼 란에 작성한 후

조회수 : 4073, 댓글 : 47개를 기록했던 글이 있습니다.

![phpschool_img_01](https://user-images.githubusercontent.com/56210220/66379776-16c65e80-e9f1-11e9-8adb-baf1679652f4.png)


[https://phpschool.com/gnuboard4/bbs/board.php?bo_table=forum&wr_id=152674&page=2](https://phpschool.com/gnuboard4/bbs/board.php?bo_table=forum&wr_id=152674&page=2)

저 스스로 많은 고민을 하던 시기에 작성하고,

그 과정을 통해 깨달음도 얻었던 경험이라 이 글 자체가 저의 소개가 될 수 있을 것 같습니다.
```
개발자 성향에 관한 이야기입니다.


A라는 개발 성향이 있습니다.

어떠한 목표가 있다면 세부적인것들을 파기보단 현재 내가 알거나 할수있는 방법을 가지고

우선적으로 그 목표부터 구현하는 방식.

일단 html 로 어느정도 그려놓고, 그 안에 들어가는걸 하나하나 만들고,

모르면 그 부분에 대해서 찾구요.

전체적으로 어느정도 돌아가면 그 상태에서 하나씩 눌러보며 확인하고 수정하고,

30%의 완성도로 결과물을 만들어놓고 그 완성도를 높여가는 개발 방식.

개발스타일 이것을 A로 칭하겠습니다.


B라는 성향이 있다는걸 알게된 건 어떤 한 친구 덕분입니다.

이 친구는 결과물이 안나옵니다. 왜냐면 java api docs를 엄청나게 파고 있습니다.

toString() 이 도대체 뭔지 어떻게 동작하는지가 궁금합니다.

모르는 method가 나오면 바로바로 하나씩 찾아보고 알아야 하고 그래야 직성이 풀리는 겁니다.

그래서 2주라는 시간의 과제가 있다면 이 친구에겐 시간이 부족합니다.

알아야 하고 궁금한 것들이 너~~무나도 많은 것입니다.


A의 입장?(온전히 주관적입니다)

angular를 최초로 도입했던 프로젝트가 있습니다.

일단 구글링을 시도합니다. npm? bower? 다 처음듣는겁니다. angular-amd? requirejs? 

뭔진 잘 모르겠지만

나름 괜찮아보이는 블로그를 토대로 따라합니다.

angular-route, directive, two bind way 등의 단어도 상당히 생소합니다.

상관없습니다! 여튼 밑그림을 그리고 그 상태에서 바로 작업을 시작합니다

메뉴를 만들고 ng-repeat을 써보고 ng-model을 써보니, 우워 이런게 two bind way 이네!

어떤 경우에는 '이거..결국 jquery처럼 써야하나..'라는 고민을 하며 구글링을 해보니

directive 예제가 있고 아 ~ 이게 이런거구나 이해하며 뚝딱뚝딱 만들어갑니다.

각 페이지별 세부기능은 들어가지 않았지만 기본 레이아웃 작업을 세팅하는데

5일가량 걸렸습니다.



B의 입장!(이것도 당연히 저의 추측)

reactjs 를 최초로 도입하는 프로젝트가 있습니다.

reactjs 라는 동작 방식 그 자체가 궁금합니다. 분석이 필요합니다.

props, reducers, redux, redux-saga 등 쏟아져있는 많은 라이브러리들을 분석하고

알아야 하는 시간이 필요합니다.

이런 분석이 끝나야 작업은 시작됩니다.

처음 써보는 것이니 당연히 모르는 부분 투성이고 그럴때마다 시간이 필요합니다.

하지만 동작방식에 대한 습득이 이미 완료!

이제 또 reactjs 를 쓰게 된다면 나는 왕!


-----

결론

A라는 친구는 개발자로 일하면서 일적으로 나름 인정받으며 생활했습니다.

얘는 참 빠릿빠릿해! 일을 잘해! 업무능력이 좋아! 란 이야기 많이 들어봤겠죠..


근데 B성향의 친구들에게 인정을 받을순 없는겁니다.

B성향 친구들이 A의 소스를 보게 된다면 티가 나는거죠 !

이거 왜이렇게 했지? 이건 이상한데? 나라면 이렇게 안했을텐데, 얘는 기술이 별로네!

반대로 A는 B성향 친구들의 작업 소스를 보면, 오호~ 이렇게도 하는구나 하면서 따라해보기도 하고 하죠 ㅡ,.ㅡ

A는 억울합니다. 그럴 시간도 없었던 촉박한 프로젝트였어... 단 5일이였다고.. html 분리해서 가져다 붙이기도 바빴단 말야 !!

B : 넌 기술이 별루야
```

저는 A 성향의 개발자로 일을 해왔고, 제가 B 처럼 해오지 못했던 부분에 자괴감을 느끼고 있었습니다.

왜 난 웹 개발자로 이렇게 일하면서 브라우저가 어떤 방식으로 동작하여

화면에 보여지는가에 대해 궁금해 하지 않았을까?

지속적으로 reflow 와 repaint 가 일어나게끔 작업을 하고 있으면서, 개선할 수 있는 방법을 생각 안해봤을까?

평소에는 그냥 지나치던 많은 것들에서 궁금증이 생기기 시작하였습니다.

이때부터 저의 성향은 A 지만 B 의 장점도 가질로 있도록 지금도 노력을 하고 있습니다.

계속 발전할 수 있는 가능성이 있고, 현재 주어지는 업무에도 충실할 수 있는 개발자가 바로 저 입니다!


# 좋게 말하면 아이디어, 나쁘게 말하면 엉뚱한 짓

저는 야구를 상당히 좋아합니다.

베트맨을 통해 베팅을 해본적도 있습니다.

야구를 보다보면서 심판의 스트라이크 존에 불만? 혹은 궁금증을 가졌습니다.

저걸 분석해볼 수 있는 방법이 없을까 ?

naver 를 크롤링 해서 데이터를 수집해볼 수 있겠다라는 생각을 하고

자그마한 extension 을 하나 만들어 실행해보니,

2010년부터 최근까지 했던 모든 경기의 심판별로 볼, 스트라이크 판정 데이터를 수집할 수 있었고

총 220만개 데이터를 가지고 나름의 분석을 진행하여

32%라는 우리나라 KBO 통산 스트라이크 확률을 도출 하였습니다.

이런 정보를 공유해줬으면 좋겠다! 생각하여 youtube 채널까지 판뒤 업로드 해놓았지만,

찾아 봐주시는 분이 없네요.

[![Video Label](https://user-images.githubusercontent.com/56210220/66411014-054f7780-ea2e-11e9-9928-b1d2c41d14b6.png)](https://www.youtube.com/watch?v=fQVe-lgpFdc)

지금도 무수한 아이디어가 넘쳐 나는 사람 입니다.

# '윈디소프트' 에서의 경험
## 괴혼 게임 사이트

javascript, html, css, jquery, mysql, postgres, php, svn, centOS, apache

2010.01 ~ 2010.03

- 퍼블리싱이 완료된 html과 css 파일을 가지고 frontend, backend 구분없이 전담
- javascript로 게임 런처 activeX 설치 및 실행
- 클라이언트 pc 사양 체크 activeX 설치 및 실행
- 게임 설명 가이드
- 커뮤니티 게시판
- 각종 이벤트 페이지

## 겟엠프트2 게임 사이트
javascript, html, css, jquery, mysql, postgres, php, svn, centOS, apache

2010.04 ~ 2010.06

- 퍼블리싱이 완료된 html과 css 파일을 가지고 frontend, backend 구분없이 전담
- javascript로 게임 런처 activeX 설치 및 실행
- 클라이언트 pc 사양 체크 activeX 설치 및 실행
- 게임 설명 가이드
- 커뮤니티 게시판
- 각종 이벤트 페이지

## 짱구는못말려2 게임 사이트
javascript, html, css, jquery, mysql, postgres, php, svn, centOS, apache

2010.07 ~ 2010.09

- 퍼블리싱이 완료된 html과 css 파일을 가지고 frontend, backend 구분없이 전담
- javascript로 게임 런처 activeX 설치 및 실행
- 클라이언트 pc 사양 체크 activeX 설치 및 실행
- 게임 설명 가이드
- 커뮤니티 게시판
- 각종 이벤트 페이지

## 철권 게임 사이트
javascript, html, css, jquery, mysql, postgres, php, svn, centOS, apache

2010.10 ~ 2010.12

- 퍼블리싱이 완료된 html과 css 파일을 가지고 frontend, backend 구분없이 전담
- 철권카드 등록 및 조회
- 게임 설명 가이드
- 게임대회 안내
- 커뮤니티 게시판
- 각종 이벤트 페이지

# '메이크샵' (코리아센터닷컴) 에서의 경험
## 몰테일 물류관리시스템
javascript, html, css, jquery, mysql, php, cakePHP, svn, freeBSD, apache

2011.01 ~ 2014.01

- 퍼블리싱부터 frontend, backend 구분없이 전담한 2인 개발자 중 1인
- 미국 현지 물류 센터로 배송 물건이 도착하면 시스템에서 조회시 고객이 주문한 주문서 표시
- 입고 시스템
- 계측 시스템
- 택배사와의 연동, 송장번호 발급 포함 배송 시스템
- 각각의 배송상태 처리
- 쿠폰 및 프로모션 코드 발급 시스템
- 바코드를 이용한 센터 내 물류 처리 시스템
- 각 물류센터 담당자 별로 처리 통계 시스템




## 몰테일 고객 페이지

javascript, html, css, jquery, mysql, php, cakePHP, svn, freeBSD, apache

2011.01 ~ 2014.01

- 퍼블리싱부터 frontend, backend 구분없이 전담한 2인 개발자 중 1인
- 회원가입
- 회원별 개인 사서함 발급 시스템
- 배송대행 관련 가이드
- 무게별 요금 안내
- 배송대행 신청 주문서
- amazon 등 고객의 계정 비번을 받아 배송대행 신청 주문서 자동완성 기능
- 해외 결제 시스템
- 쿠폰 및 프로모션 코드 적용
- 배송 추적 등 부가 기능

## 몰테일 중국

javascript, html, css, jquery, mysql, php, cakePHP, svn, freeBSD, apache

2012.01 ~ 2012.12

- 미국 시스템을 적용하여 중국 서비스 오픈

## 몰테일 일본

javascript, html, css, jquery, mysql, php, cakePHP, svn, freeBSD, apache

2013.01 ~ 2013.12
- 미국 시스템을 적용하여 일본 서비스 오픈

# 현재 카페24 로의 이직

## PSDA

javascrpit, html, css, jquery, php, codeigniter, svn, nginx

2014.06 ~ 2015.06

- 퍼블리싱부터 frontend, backend 구분없이 웹파트 담당 3인 개발자 중 1인
- cafe24 내 ec admin 상품 등록/수정 쪽에서 psd 파일을 업로드 할 수 있는 기능
- 업로드 된 psd 파일을 조회/처리 할 수 있는 admin 페이지
- psd 내 text layer 를 파싱하여 내려주는 window server 와의 통신
- 추출된 한글 문구에 대한 자동 번역 및 수동 번역 기능
- 번역된 문구로 다시 psd파일을 만들어 줄수 있는 rendering server 와의 통신

## 프리백

javascrpit, html, css, jquery, php, codeigniter, svn, nginx

2015.07 ~ 2015.12

- 퍼블리싱부터 frontend, backend 구분없이 웹부분 담당 3인 개발자 중 1인
- cafe24에 등록된 상품의 이미지들을 전부 추출
- face detector, text detector, color detector, tag detector 등을 이용하여 이미지 분류
- php imagic 등을 활용하여 티몰, 라쿠텐 등 해외 오픈마켓에서 요구하는 이미지로 변형

## 심플에디터

javascript, angular, requireJS, angularAMD, html, css, webpack, git

2016.01 ~ 2016.12

- frontend 전담 2인 중 1인
- photoshop 과 유사한 UI 구성
- image, text, 도형 등 layer 를 그릴 수 있는 영역 구현
- layer 위치 이동시 작업 영역 내 z-index 순서 변경
- canvas 태그를 이용한 thumbnail navigation 영역 구현
- 모든 레이어를 psd parsing json 구조와 동일하게 맞추어 PSDA 프로젝트와 연동
- 레이어 변경 감지하여 snapshot 이후 history back, front 기능 구현


## 이미지번역툴

javascript, angular4, typescript, html, css, sass, webpack, mercurial

2017.01 ~ 2017.12

- frontend 전담 1인 중 1인
- image 내에서 한글을 인식할 수 있는 C++ 프로그램과 연동
- 추출된 한글과 좌표를 이용해 자동 번역 이후 번역된 이미지 완성
- 심플에디터와 연동하여 이미지의 세밀한 수정 기능 제공
- json 데이터 구조를 동일하여 맞추어 jpg, png 파일을 psd 파일로 변환 가능



## 카페24 번역 시스템 구축

javascript, html, css, vuejs, webpack, mercurial, elasticsearch, rabbitMQ, logstash, kafka

2018.01 ~ 2018.12

- 카페24에 등록된 대규모 상점의 판매중인 영문,중문,일문 전체 상품을 수집
- 각 카테고리 별로 자동 번역 및 검수 진행
- 번역이 완료되면 각 언어권의 상점으로 업데이트 처리


## 카페24 통합 CS 시스템 구축

javascript, html, css, vuejs, webpack, mercurial, elasticsearch, rabbitMQ, logstash, kafka

2019.01 ~ 2019.10

- 카페24에 등록된 대규모 상점의 판매중인 영문,중문,일문 으로 접수되는 모든 문의를 수집
- 수집된 이메일, 각종 게시판, 리뷰 등의 문의들을 일괄적으로 확인 및 처리 할수 있는 시스템 구축

