<template>
  <div>
    <Upload :action="uploadAction">
      <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
    </Upload>
    <Form>
      <Row>
        <Col span="12">
          <FormItem label="条件1">
            <Input type="text"></Input>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="条件2">
            <Input type="text"></Input>
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Button type="primary" @click="search">搜索</Button>
      </FormItem>
    </Form>
    <Table :columns="columns1" :data="data1"></Table>
  </div>
</template>
<script>
import _server from '../server';
var server = _server;

export default {
  data() {
    return {
      'uploadAction': 'server/file-upload',
      columns1: [
        {
          title: '',
          key: 'index'
        },
        {
          title: '字段1',
          key: 'xx'
        },
        {
          title: '字段2',
          key: 'zz'
        },
      ],
      data1: [],
    }
  },
  methods: {
    async search () {
      var res = await server.api1.search({ xx: 1, zz: 2 });
      var data = await res.json();
      console.log(data);
    },
  },
};
</script>
