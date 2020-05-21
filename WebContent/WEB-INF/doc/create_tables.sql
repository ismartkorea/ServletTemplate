/*-- ���̺� ��� --*/
grant all privileges on  koreagoodz.* to  koreagoodz@localhost identified by 'admin7212';
create database koreagoodz;
flush privileges;

/*-- ���� ���̺� --*/ 
DROP TABLE IF EXISTS `admin_tbl`;
CREATE TABLE `admin_tbl` (
  `id` char(8) NOT NULL COMMENT '���̵�',
  `pwd` varchar(20) NOT NULL,
  `admin_name` varchar(20) NOT NULL COMMENT '�����ڸ�',
  `admin_tel_no` varchar(13) DEFAULT NULL COMMENT '�����ڿ���ó',
  `admin_email` varchar(60) NOT NULL COMMENT '������ �̸���',
  `admin_level` char(1) NOT NULL DEFAULT '1' COMMENT '�����ڱ��� (1:��ü����,2:����ڱ���,3:��������)',
  `regist_user` varchar(20) DEFAULT NULL COMMENT '����ڸ�',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '�����',
  `update_user` varchar(20) DEFAULT '0000-00-00 00:00:00' COMMENT '�����ڸ�',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '�����ڸ�',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COMMENT='������ ���̺�';


/*-- ��Ʈ�� ���̺� --*/
DROP TABLE IF EXISTS `customer_tbl`;
CREATE TABLE `customer_tbl` (
  `id` char(6) NOT NULL COMMENT '�������̵�',
  `name` varchar(20) NOT NULL COMMENT '����',
  `shop_name` varchar(40) DEFAULT NULL COMMENT '������',
  `address` varchar(120) DEFAULT NULL COMMENT '�����ּ�',
  `post_no` varchar(7) DEFAULT NULL COMMENT '�����ȣ',
  `cell_no` varchar(13) NOT NULL COMMENT '�޴�����ȣ',
  `tel_no` varchar(13) DEFAULT NULL COMMENT '��ȭ��ȣ',
  `saupja_no` varchar(12) DEFAULT NULL COMMENT '����ڵ�Ϲ�ȣ',
  `email` varchar(80) NOT NULL COMMENT '�̸����ּ�',
  `hp_url` varchar(80) DEFAULT NULL COMMENT 'Ȩ������URL',
  `visit_day` char(1) DEFAULT NULL COMMENT '�湮���� ���� üũ.',
  `visit_time` char(1) DEFAULT NULL COMMENT '�湮���� �ð� üũ.',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '�����',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '������',
  `regist_user` varchar(20) DEFAULT NULL COMMENT '��ϻ���ڸ�',
  `update_user` varchar(20) DEFAULT NULL COMMENT '��������ڸ�',
  PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COMMENT='ismartkoera�����̺�';

/*-- ���� ���̺� --*/
DROP TABLE IF EXISTS `user_tbl`;
CREATE TABLE `user_tbl` (
  `user_id` varchar(40) NOT NULL COMMENT '����� ���̵�',
  `user_name` varchar(20) NOT NULL COMMENT '����ڸ�',
  `user_email` varchar(60) NOT NULL COMMENT '����� �̸���',
  `user_jumin_no1` char(6) NOT NULL COMMENT '����� �ֹε�Ϲ�ȣ',
  `user_jumin_no2` char(7)NOT NULL COMMENT '����� �ֹε�Ϲ�ȣ',
  `user_post_no1` char(3) DEFAULT NULL COMMENT '����� �����ȣ',
  `user_post_no2` char(3) DEFAULT NULL COMMENT '����� �����ȣ',
  `user_address1` varchar(20) DEFAULT NULL COMMENT '����� �ּ�',
  `user_address2` varchar(20) DEFAULT NULL COMMENT '����� �ּ�',
  `user_tel_no1` char(3) DEFAULT NULL COMMENT '����� ��ȭ��ȣ',
  `user_tel_no2` char(4) DEFAULT NULL COMMENT '����� ��ȭ��ȣ',
  `user_tel_no3` char(4) DEFAULT NULL COMMENT '����� ��ȭ��ȣ',
  `user_cell_no1` char(3) DEFAULT NULL COMMENT '�޴��� ����ó',
  `user_cell_no2` char(4) DEFAULT NULL COMMENT '�޴��� ����ó',
  `user_cell_no3` char(4) DEFAULT NULL COMMENT '�޴��� ����ó',
  `sms_recive_yn` char(1) DEFAULT NULL COMMENT 'sms ���� ���� (Y,N)',
  `new_recive_yn` char(1) DEFAULT NULL COMMENT '�������� ����YN',
  `user_birth_date` varchar(20) DEFAULT NULL COMMENT '�������',
  `user_wedding_date` varchar(20) DEFAULT NULL COMMENT '��ȥ�����',
  `partner_birth_date` varchar(20) DEFAULT NULL COMMENT '����� �������',
  `interest_area` varchar(20) DEFAULT NULL COMMENT '���� �о�',
  `local_area` varchar(20) DEFAULT NULL COMMENT '��� ����',
  `recommand_user_id` varchar(20) DEFAULT NULL COMMENT '��õid',
  `user_pw` varchar(16) DEFAULT NULL COMMENT '�н�����',
  `user_pw_check_req` varchar(20) DEFAULT NULL COMMENT '��й�ȣ Ȯ�� ����',
  `user_pw_check_ans` varchar(20) DEFAULT NULL COMMENT '��й�ȣ Ȯ������ �亯',
  `regist_user` varchar(20) DEFAULT NULL COMMENT '����� ��',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '�����',
  `update_user` varchar(20) DEFAULT NULL COMMENT '������ ��',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '������ ��',
  PRIMARY KEY (`user_id`)
) DEFAULT CHARSET=utf8 COMMENT='����� ���̺�';


/*-- ��ǰ ���̺� --*/
DROP TABLE IF EXISTS `product_tbl`;
CREATE TABLE `product_tbl` (
  `model_no` varchar(50) NOT NULL COMMENT '��ǰ�𵨸�',
  `name` varchar(40) NOT NULL COMMENT '��ǰ��',
  `model_type` VARCHAR(20) COMMENT '��Ÿ��(����,����)',
  `model_type_kind_count` int(11) DEFAULT NULL COMMENT '��Ÿ��������',
  `description` varchar(200) DEFAULT NULL COMMENT '��ǰ�󼼼���',
  `product_category_type` char(2) DEFAULT NULL COMMENT '��ǰī�װ�Ÿ��(�׼�����,���̽�-01:���̽�,02:�׼�����)',
  `phone_type` char(2) DEFAULT NULL COMMENT '��ǰ ������',
  `purchase_price` int(11) DEFAULT NULL COMMENT '���԰���',
  `online_wholesale_price` int(11) DEFAULT NULL COMMENT '�¶��ε��Ű�',
  `online_retail_price` int(11) DEFAULT NULL COMMENT '�¶��μҸŰ�',
  `offline_wholesale_price` int(11) DEFAULT NULL COMMENT '�������ε��Ű�',
  `offline_retail_price` int(11) DEFAULT NULL COMMENT '�������μҸŰ�',
  `openmarket_sale_price` int(11) DEFAULT NULL COMMENT '���¸������ΰ�',
  `openmarket_retail_price` int(11) DEFAULT NULL COMMENT '���¶��μҸŰ�',
  `shoppingmall_sale_price` int(11) DEFAULT NULL COMMENT '���θ����ΰ�',
  `shoppingmall_retail_price` int(11) DEFAULT NULL COMMENT '���θ��ҸŰ�',
  `amount` int(11) DEFAULT NULL COMMENT '����',
  `image_url1` varchar(60) DEFAULT NULL COMMENT '��ǰ�̹���1',
  `image_url2` varchar(60) DEFAULT NULL COMMENT '��ǰ�̹���2',
  `image_url3` varchar(60) DEFAULT NULL COMMENT '��ǰ�̹���3',
  `thumnail_image_url` varchar(60) DEFAULT NULL COMMENT '��ǰ������',
  `sale_status` char(2) DEFAULT NULL COMMENT '�ǸŻ���(01:�Ǹ���,02:�ǸſϷ�,03:���ǹٶ�)',
  `origin` varchar(20) DEFAULT NULL COMMENT '������',
  `brand_name` varchar(20) DEFAULT NULL COMMENT '�귣���',
  `shipping_type` char(2) DEFAULT NULL COMMENT '�������(01:����,02:��ü��,03:�ù�)',
  `main_display` char(2) DEFAULT NULL COMMENT '���� ���� ����(01:������,02:���þ���)',
  `product_display` char(2) DEFAULT NULL COMMENT '��ǰ ���� ����(01:������,02:���þ���)', 
  `regist_user` varchar(20) DEFAULT NULL COMMENT '�����',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '�����',
  `update_user` varchar(20) DEFAULT NULL COMMENT '������',
  `update_date` timestamp NOT NULL COMMENT '������'
) DEFAULT CHARSET=utf8 COMMENT='��ǰ ���̺�';

/*-- �������� ���̺� --*/
DROP TABLE IF EXISTS `notice_tbl`; 
CREATE TABLE `notice_tbl` (
  `no` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '�ѹ�',
  `title` varchar(20) DEFAULT NULL COMMENT '����',
  `content` varchar(200) DEFAULT NULL COMMENT '�������� ����',
  `start_date` date DEFAULT NULL COMMENT '�������۳�¥',
  `end_date` date DEFAULT NULL COMMENT '�������׳���¥',
  `regist_user` varchar(20) DEFAULT NULL COMMENT '����ڸ�',
  `regist_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '�����',
  `update_user` varchar(20) DEFAULT NULL COMMENT '�����ڸ�',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '������',
  PRIMARY KEY (`no`)
) DEFAULT CHARSET=utf8 MIN_ROWS=1 MAX_ROWS=999999 COMMENT='�������� ���̺�';

/*-- �ֹ� ���̺� --*/
DROP TABLE IF EXISTS order_tbl;
CREATE TABLE order_tbl (
   order_no varchar(20) NOT NULL COMMENT '�ֹ���ȣ',
   order_user varchar(20) NOT NULL COMMENT '�ֹ��ڸ�',
   order_date timestamp COMMENT '�ֹ���¥',
   order_state char(1) NOT NULL COMMENT '�ֹ�����(0:�ֹ����,1:�ֹ��Ϸ�)',
   order_cancel_date timestamp comment '�ֹ����',
   product_category varchar(20) COMMENT '��ǰī�װ�',
   pay_state char(1) NOT NULL COMMENT '��������(0:���ҿ���,1:�������,2:���ҿϷ�)',
   total_count int(11) DEFAULT '0' comment '�Ѱ���',
   total_price int(11) DEFAULT '0' comment '�Ѱ���',
   customer_id char(6) COMMENT '�������̵�', 
   regist_user varchar(20) COMMENT '����ڸ�',
   regist_date timestamp  COMMENT '�����',
   update_user varchar(20) COMMENT '�����ڸ�',
   update_date timestamp  COMMENT '������',
   PRIMARY KEY (order_no)
) DEFAULT CHARSET=utf8 COMMENT = '�ֹ� ���̺�';

/*-- �ֹ� ��ǰ ���̺� --*/
DROP TABLE IF EXISTS order_product_tbl;
CREATE TABLE order_product_tbl (
   order_no varchar(20) NOT NULL COMMENT '�ֹ���ȣ',
   model_no VARCHAR(50) NOT NULL COMMENT '�𵨸�',
   model_type VARCHAR(20) COMMENT '��Ÿ��(����,����)',
   price INT(11) DEFAULT '0' COMMENT '��ǰ���Ű���',
   order_count INT(11) DEFAULT '0' COMMENT '�ֹ�����',
   order_price INT(11) DEFAULT '0' COMMENT '�ֹ�����',
   regist_user VARCHAR(20) COMMENT '����ڸ�',
   regist_date TIMESTAMP COMMENT '�����',
   update_user VARCHAR(20) COMMENT '�����ڸ�',
   update_date TIMESTAMP COMMENT '������'
) DEFAULT CHARSET=utf8 COMMENT = '�ֹ���ǰ ���̺�';

/*-- ��ٱ��� ���̺� --*/
DROP TABLE IF EXISTS cart_tbl;
CREATE TABLE cart_tbl (
   model_no VARCHAR(50) NOT NULL COMMENT '�𵨸�',
   purchase_count INT(11) DEFAULT '0' COMMENT '���� ����',
   regist_user VARCHAR(20) COMMENT '����ڸ�',
   regist_date TIMESTAMP COMMENT '�����',
   update_user VARCHAR(20) COMMENT '�����ڸ�',
   update_date TIMESTAMP COMMENT '������'
) DEFAULT CHARSET=utf8 COMMENT = '��ٱ��� ���̺�';   

/*-- �׽�Ʈ�� ��ǰ ���̺� --*/
DROP TABLE IF EXISTS test_product_tbl;
CREATE TABLE test_product_tbl (
  `model_no` varchar(50) NOT NULL COMMENT '��ǰ�𵨸�',
  `name` varchar(40) NOT NULL COMMENT '��ǰ��',
  `model_type` varchar(20) DEFAULT NULL COMMENT '��Ÿ��(����,����)',
  `model_type_kind_count` int(11) DEFAULT NULL COMMENT '��Ÿ��������',
  `phone_type` char(2) DEFAULT NULL COMMENT '��ǰ ������',
  `thumnail_image_url` varchar(60) DEFAULT NULL COMMENT '��ǰ������'
   
) DEFAULT CHARSET=utf8 COMMENT='�׽�Ʈ�� ��ǰ ���̺�';

/*-- �α��ξƿ� ��� ���̺� --*/
DROP TABLE IF EXISTS `loginout_tbl`;
CREATE TABLE `loginout_tbl` (
 `seq_no` int(255) unsigned NOT NULL AUTO_INCREMENT COMMENT '�ѹ�',
 `user_id` varchar(20) NOT NULL COMMENT '�α�������id',
 `login_time` timestamp NOT NULL COMMENT '�α��� �ð�',
 `logout_time` timestamp NOT NULL COMMENT '�α׾ƿ� �ð�',
  PRIMARY KEY (`seq_no`)
) DEFAULT CHARSET=utf8 MIN_ROWS=1 MAX_ROWS=999999 COMMENT='�α��ξƿ� ������̺�';
commit;