/*-- 테이블 등록 --*/
grant all privileges on  koreagoodz.* to  koreagoodz@localhost identified by 'admin7212';
create database koreagoodz;
flush privileges;

/*-- 어드민 테이블 --*/ 
DROP TABLE IF EXISTS `admin_tbl`;
CREATE TABLE `admin_tbl` (
  `id` char(8) NOT NULL COMMENT '아이디',
  `pwd` varchar(20) NOT NULL,
  `admin_name` varchar(20) NOT NULL COMMENT '관리자명',
  `admin_tel_no` varchar(13) DEFAULT NULL COMMENT '관리자연락처',
  `admin_email` varchar(60) NOT NULL COMMENT '관리자 이메일',
  `admin_level` char(1) NOT NULL DEFAULT '1' COMMENT '관리자권한 (1:전체권한,2:사용자권한,3:수정권한)',
  `regist_user` varchar(20) DEFAULT NULL COMMENT '등록자명',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '등록일',
  `update_user` varchar(20) DEFAULT '0000-00-00 00:00:00' COMMENT '수정자명',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '수정자명',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COMMENT='관리자 테이블';


/*-- 파트너 테이블 --*/
DROP TABLE IF EXISTS `customer_tbl`;
CREATE TABLE `customer_tbl` (
  `id` char(6) NOT NULL COMMENT '상점아이디',
  `name` varchar(20) NOT NULL COMMENT '고객명',
  `shop_name` varchar(40) DEFAULT NULL COMMENT '상점명',
  `address` varchar(120) DEFAULT NULL COMMENT '상점주소',
  `post_no` varchar(7) DEFAULT NULL COMMENT '우편번호',
  `cell_no` varchar(13) NOT NULL COMMENT '휴대폰번호',
  `tel_no` varchar(13) DEFAULT NULL COMMENT '전화번호',
  `saupja_no` varchar(12) DEFAULT NULL COMMENT '사업자등록번호',
  `email` varchar(80) NOT NULL COMMENT '이메일주소',
  `hp_url` varchar(80) DEFAULT NULL COMMENT '홈페이지URL',
  `visit_day` char(1) DEFAULT NULL COMMENT '방문가능 요일 체크.',
  `visit_time` char(1) DEFAULT NULL COMMENT '방문가능 시간 체크.',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '등록일',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '수정일',
  `regist_user` varchar(20) DEFAULT NULL COMMENT '등록사용자명',
  `update_user` varchar(20) DEFAULT NULL COMMENT '수정사용자명',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COMMENT='ismartkoera고객테이블';

/*-- 유저 테이블 --*/
DROP TABLE IF EXISTS `user_tbl`;
CREATE TABLE `user_tbl` (
  `user_id` varchar(40) NOT NULL COMMENT '사용자 아이디',
  `user_name` varchar(20) NOT NULL COMMENT '사용자명',
  `user_email` varchar(60) NOT NULL COMMENT '사용자 이메일',
  `user_jumin_no1` char(6) NOT NULL COMMENT '사용자 주민등록번호',
  `user_jumin_no2` char(7)NOT NULL COMMENT '사용자 주민등록번호',
  `user_post_no1` char(3) DEFAULT NULL COMMENT '사용자 우편번호',
  `user_post_no2` char(3) DEFAULT NULL COMMENT '사용자 우편번호',
  `user_address1` varchar(20) DEFAULT NULL COMMENT '사용자 주소',
  `user_address2` varchar(20) DEFAULT NULL COMMENT '사용자 주소',
  `user_tel_no1` char(3) DEFAULT NULL COMMENT '사용자 전화번호',
  `user_tel_no2` char(4) DEFAULT NULL COMMENT '사용자 전화번호',
  `user_tel_no3` char(4) DEFAULT NULL COMMENT '사용자 전화번호',
  `user_cell_no1` char(3) DEFAULT NULL COMMENT '휴대폰 연락처',
  `user_cell_no2` char(4) DEFAULT NULL COMMENT '휴대폰 연락처',
  `user_cell_no3` char(4) DEFAULT NULL COMMENT '휴대폰 연락처',
  `sms_recive_yn` char(1) DEFAULT NULL COMMENT 'sms 수신 여부 (Y,N)',
  `new_recive_yn` char(1) DEFAULT NULL COMMENT '뉴스메일 수신YN',
  `user_birth_date` varchar(20) DEFAULT NULL COMMENT '생년월일',
  `user_wedding_date` varchar(20) DEFAULT NULL COMMENT '결혼기념일',
  `partner_birth_date` varchar(20) DEFAULT NULL COMMENT '배우자 생년월일',
  `interest_area` varchar(20) DEFAULT NULL COMMENT '관심 분야',
  `local_area` varchar(20) DEFAULT NULL COMMENT '사는 지역',
  `recommand_user_id` varchar(20) DEFAULT NULL COMMENT '추천id',
  `user_pw` varchar(16) DEFAULT NULL COMMENT '패스워드',
  `user_pw_check_req` varchar(20) DEFAULT NULL COMMENT '비밀번호 확인 질문',
  `user_pw_check_ans` varchar(20) DEFAULT NULL COMMENT '비밀번호 확인질문 답변',
  `regist_user` varchar(20) DEFAULT NULL COMMENT '등록자 명',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '등록일',
  `update_user` varchar(20) DEFAULT NULL COMMENT '수정자 명',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '수정자 일',
  PRIMARY KEY (`user_id`)
) DEFAULT CHARSET=utf8 COMMENT='사용자 테이블';


/*-- 상품 테이블 --*/
DROP TABLE IF EXISTS `product_tbl`;
CREATE TABLE `product_tbl` (
  `model_no` varchar(50) NOT NULL COMMENT '제품모델명',
  `name` varchar(40) NOT NULL COMMENT '상품명',
  `model_type` VARCHAR(20) COMMENT '모델타입(색깔,형태)',
  `model_type_kind_count` int(11) DEFAULT NULL COMMENT '모델타입종류수',
  `description` varchar(200) DEFAULT NULL COMMENT '상품상세설명',
  `product_category_type` char(2) DEFAULT NULL COMMENT '상품카테고리타입(액세서리,케이스-01:케이스,02:액세서리)',
  `phone_type` char(2) DEFAULT NULL COMMENT '상품 대상기종',
  `purchase_price` int(11) DEFAULT NULL COMMENT '매입가격',
  `online_wholesale_price` int(11) DEFAULT NULL COMMENT '온라인도매가',
  `online_retail_price` int(11) DEFAULT NULL COMMENT '온라인소매가',
  `offline_wholesale_price` int(11) DEFAULT NULL COMMENT '오프라인도매가',
  `offline_retail_price` int(11) DEFAULT NULL COMMENT '오프라인소매가',
  `openmarket_sale_price` int(11) DEFAULT NULL COMMENT '오픈마켓할인가',
  `openmarket_retail_price` int(11) DEFAULT NULL COMMENT '오픈라인소매가',
  `shoppingmall_sale_price` int(11) DEFAULT NULL COMMENT '쇼핑몰할인가',
  `shoppingmall_retail_price` int(11) DEFAULT NULL COMMENT '쇼핑몰소매가',
  `amount` int(11) DEFAULT NULL COMMENT '수량',
  `image_url1` varchar(60) DEFAULT NULL COMMENT '상품이미지1',
  `image_url2` varchar(60) DEFAULT NULL COMMENT '상품이미지2',
  `image_url3` varchar(60) DEFAULT NULL COMMENT '상품이미지3',
  `thumnail_image_url` varchar(60) DEFAULT NULL COMMENT '상품섬네일',
  `sale_status` char(2) DEFAULT NULL COMMENT '판매상태(01:판매중,02:판매완료,03:문의바람)',
  `origin` varchar(20) DEFAULT NULL COMMENT '원산지',
  `brand_name` varchar(20) DEFAULT NULL COMMENT '브랜드명',
  `shipping_type` char(2) DEFAULT NULL COMMENT '배송형태(01:무료,02:우체국,03:택배)',
  `main_display` char(2) DEFAULT NULL COMMENT '메인 전시 여부(01:전시함,02:전시안함)',
  `product_display` char(2) DEFAULT NULL COMMENT '상품 전시 여부(01:전시함,02:전시안함)', 
  `regist_user` varchar(20) DEFAULT NULL COMMENT '등록자',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '등록일',
  `update_user` varchar(20) DEFAULT NULL COMMENT '수정자',
  `update_date` timestamp NOT NULL COMMENT '수정일'
) DEFAULT CHARSET=utf8 COMMENT='상품 테이블';

/*-- 공지사항 테이블 --*/
DROP TABLE IF EXISTS `notice_tbl`; 
CREATE TABLE `notice_tbl` (
  `no` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '넘버',
  `title` varchar(20) DEFAULT NULL COMMENT '제목',
  `content` varchar(200) DEFAULT NULL COMMENT '공지사항 내용',
  `start_date` date DEFAULT NULL COMMENT '공지시작날짜',
  `end_date` date DEFAULT NULL COMMENT '공지사항끝날짜',
  `regist_user` varchar(20) DEFAULT NULL COMMENT '등록자명',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '등록일',
  `update_user` varchar(20) DEFAULT NULL COMMENT '수정자명',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '수정일',
  PRIMARY KEY (`no`)
) DEFAULT CHARSET=utf8 MIN_ROWS=1 MAX_ROWS=999999 COMMENT='공지사항 테이블';

/*-- 주문 테이블 --*/
DROP TABLE IF EXISTS order_tbl;
CREATE TABLE order_tbl (
   order_no varchar(20) NOT NULL COMMENT '주문번호',
   order_user varchar(20) NOT NULL COMMENT '주문자명',
   order_date timestamp COMMENT '주문날짜',
   order_state char(1) NOT NULL COMMENT '주문상태(0:주문취소,1:주문완료)',
   order_cancel_date timestamp comment '주문취소',
   product_category varchar(20) COMMENT '상품카테고리',
   pay_state char(1) NOT NULL COMMENT '결제상태(0:지불예정,1:지불취소,2:지불완료)',
   total_count int(11) DEFAULT '0' comment '총개수',
   total_price int(11) DEFAULT '0' comment '총가격',
   customer_id char(6) COMMENT '상점아이디', 
   regist_user varchar(20) COMMENT '등록자명',
   regist_date timestamp  COMMENT '등록일',
   update_user varchar(20) COMMENT '수정자명',
   update_date timestamp  COMMENT '수정일',
   PRIMARY KEY (order_no)
) DEFAULT CHARSET=utf8 COMMENT = '주문 테이블';

/*-- 주문 상품 테이블 --*/
DROP TABLE IF EXISTS order_product_tbl;
CREATE TABLE order_product_tbl (
   order_no varchar(20) NOT NULL COMMENT '주문번호',
   model_no VARCHAR(50) NOT NULL COMMENT '모델명',
   model_type VARCHAR(20) COMMENT '모델타입(색깔,형태)',
   price INT(11) DEFAULT '0' COMMENT '상품도매가격',
   order_count INT(11) DEFAULT '0' COMMENT '주문수량',
   order_price INT(11) DEFAULT '0' COMMENT '주문가격',
   regist_user VARCHAR(20) COMMENT '등록자명',
   regist_date TIMESTAMP COMMENT '등록일',
   update_user VARCHAR(20) COMMENT '수정자명',
   update_date TIMESTAMP COMMENT '수정일'
) DEFAULT CHARSET=utf8 COMMENT = '주문상품 테이블';

/*-- 장바구니 테이블 --*/
DROP TABLE IF EXISTS cart_tbl;
CREATE TABLE cart_tbl (
   model_no VARCHAR(50) NOT NULL COMMENT '모델명',
   purchase_count INT(11) DEFAULT '0' COMMENT '구매 수량',
   regist_user VARCHAR(20) COMMENT '등록자명',
   regist_date TIMESTAMP COMMENT '등록일',
   update_user VARCHAR(20) COMMENT '수정자명',
   update_date TIMESTAMP COMMENT '수정일'
) DEFAULT CHARSET=utf8 COMMENT = '장바구니 테이블';   

/*-- 테스트용 상품 테이블 --*/
DROP TABLE IF EXISTS test_product_tbl;
CREATE TABLE test_product_tbl (
  `model_no` varchar(50) NOT NULL COMMENT '제품모델명',
  `name` varchar(40) NOT NULL COMMENT '상품명',
  `model_type` varchar(20) DEFAULT NULL COMMENT '모델타입(색깔,형태)',
  `model_type_kind_count` int(11) DEFAULT NULL COMMENT '모델타입종류수',
  `phone_type` char(2) DEFAULT NULL COMMENT '상품 대상기종',
  `thumnail_image_url` varchar(60) DEFAULT NULL COMMENT '상품섬네일'
   
) DEFAULT CHARSET=utf8 COMMENT='테스트용 상품 테이블';

/*-- 로그인아웃 기록 테이블 --*/
DROP TABLE IF EXISTS `loginout_tbl`;
CREATE TABLE `loginout_tbl` (
 `seq_no` int(255) unsigned NOT NULL AUTO_INCREMENT COMMENT '넘버',
 `user_id` varchar(20) NOT NULL COMMENT '로그인유저id',
 `login_time` timestamp NOT NULL COMMENT '로그인 시간',
 `logout_time` timestamp NOT NULL COMMENT '로그아웃 시간',
  PRIMARY KEY (`seq_no`)
) DEFAULT CHARSET=utf8 MIN_ROWS=1 MAX_ROWS=999999 COMMENT='로그인아웃 기록테이블';
commit;