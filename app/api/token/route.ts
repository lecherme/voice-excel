import RPCClient from "@alicloud/pop-core";

export async function GET() {
  const client = new RPCClient({
    accessKeyId: process.env.ALI_ACCESS_KEY_ID!,
    accessKeySecret: process.env.ALI_ACCESS_KEY_SEC!,
    endpoint: "https://nls-meta.cn-shanghai.aliyuncs.com",
    apiVersion: "2019-02-28",
  });

  try {
    const result: any = await client.request("CreateToken",{});

    return Response.json({
      token: result.Token.Id,
      expireTime: result.Token.ExpireTime,
    });
  } catch (error) {
    console.error("获取 token 失败:", error);

    return Response.json(
      { error: "failed to get token" },
      { status: 500 }
    );
  }
}