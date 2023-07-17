<script lang="ts">
import project from "../assets/project.json"
export default {
  data() {
    return {
      lang: "en",
    }
  },
  computed: {
    content(vm: any){
      let p = project as Record<string, any>
      return p[(vm.lang as string)]
    }
  }
}
</script>

<template>
<div class="main-container container">
  <div class="project-page">
    <!-- PART of project -->
    <div class="page-title">
      <h2>PROJECT</h2>
    </div>
    <div class="panel panel-en" :class="{'panel-activate': lang=='en'}">
      <h3><a target="_top" href="#project1" data-toggle="collapse">{{content.title}}</a></h3>
      <div class="content-p collapse show" id="project1">
        <p v-html="content.content"></p>
        <p>
          <strong>Submission Deadline:</strong> {{content.deadline}}
          <br />
          <strong>Scheduled release:</strong> {{content.release}}
        </p>
        <p><strong>Detailed Rules:</strong></p>
        <p v-for="r in [...new Array(content.rules.length).keys()]" :key="r">{{r+1}}. {{content.rules[r]}}</p>
        <p style="margin-bottom: 0;"><strong>Failure to adhere to these rules will result in the disqualification of your submission.</strong></p>
        <div class="submit-wrapper"><a target="_top" class="submit" href="https://forms.gle/oG1YHhTrJACY3RVi9">SUBMIT</a></div>
      </div>
      <hr />
    </div>
    <div class="panel panel-en" :class="{'panel-activate': lang=='en'}">
      <h3>COMMON RULES</h3>
      <div class="content-c">
        <div class="ss-panel">
          <h4>Music Submission Rules</h4>
          <div class="ss-panel-content">
            <p class="underline">WHAT WE WANT</p>
            <p>The innovative and ideal sound.</p>
            <p class="underline"><em>Please attention!!!</em></p>
            <ul>
              <li>- One person could submit multiple entries.</li>
              <li>- The submission of released pieces is prohibited.</li>
              <li>- Bootleg tracks will not be accepted.</li>
              <li>- You can use Vocaloid as the component of your track, but the name of Vocaloid will not be shown in the credits of the album.</li>
              <li>- You will keep the full copyright of your tracks after entering this compilation.</li>
              <li>- In order to prevent plagiarism, we may ask for the individual files of your tracks. If we discover that you plagiarise after the release of the album, your tracks will be removed and you will be fully responsible for any damage that may cause.</li>
            </ul>
          </div>
        </div>
        <div class="ss-panel">
          <h4>ABOUT SUBMISSION</h4>
          <div class="ss-panel-content">
            <p>You can click the Contact button on our homepage to send the demo tracks, or send via email with the link of Dropbox/Google Drive including the demo tracks to <a target="_top" href="mailto:thoughost.dm@gmail.com">thoughost.dm@gmail.com</a>. The title of the email should be &ldquo;Submission of (Project title)&rdquo;.</p>
            <p>Moreover, participants are required to include the following information in the email:</p>
            <ul>
              <li>- A brief introduction of yourself.</li>
              <li>- Title of your tracks.</li>
              <li>- Artist name.</li>
              <li>- Genre</li>
              <li>- Your email address</li>
              <li>- Your twitter/facebook account.</li>
            </ul>
            <p>The submission tracks must be an unmastered, -6db, 44.1kHz, 16-bit or greater .wav file. You could also submit the self-mastered version at the same time.</p>
          </div>
        </div>
      </div>
      <div class="content-c">
        <div class="ss-panel">
          <h4>REWARDS</h4>
          <div class="ss-panel-content">
            <p class="underline">You will get</p>
            <ul>
              <li>- All mastered tracks.</li>
              <li>- All design artwork.</li>
              <li>- We will split one-year proceeds from the album with the participants and pay them in the 1st, 4th, 8th, and 12th month after the album release. Payment can be processed by PayPal (for overseas participants) or Amazon Giftcard (for Japanese participants).</li>
            </ul>
          </div>
        </div>
        <div class="ss-panel">
          <h4>ABOUT JUDGMENT</h4>
          <div class="ss-panel-content">
            <p>Thoughost&rsquo;s members are responsible for the judgment of this compilation, and we may ask for external assistance for judgment in some situations. The judgment process will take around one month. We will only contact persons whose entries that are accepted, and will not provide any comments on your tracks.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-zh" :class="{'panel-activate': lang=='zh'}">
      <h3><a target="_top" href="#project1" data-toggle="collapse">{{content.title}}</a></h3>
      <div class="content-p collapse show" id="project1">
        <p v-html="content.content"></p>
        <p>
          <strong>截止日期：</strong> {{content.deadline}}
          <br />
          <strong>发行日期：</strong> {{content.release}}
        </p>
        <p><strong>具体规则：</strong></p>
        <p v-for="r in [...new Array(content.rules.length).keys()]" :key="r">{{r+1}}. {{content.rules[r]}}</p>
        <p style="margin-bottom: 0;"><strong>请注意，如果您的曲目不符合以上规则，我们将不会进行收录。</strong></p>
        <div class="submit-wrapper"><a target="_top" class="submit" href="https://forms.gle/oG1YHhTrJACY3RVi9">SUBMIT</a></div>
      </div>
      <hr />
    </div>
    <div class="panel panel-zh" :class="{'panel-activate': lang=='zh'}">
      <h3>COMMON RULES</h3>
      <div class="content-c">
        <div class="ss-panel">
          <h4>作品规则</h4>
          <div class="ss-panel-content">
            <p class="underline">我们想要&hellip;&hellip;</p>
            <p>有创意且充满个人风格的音乐。</p>
            <p class="underline"><em>请注意！！！</em></p>
            <ul>
              <li>- 一个人可以提交多个曲目。</li>
              <li>- 禁止提交已经发布过的作品。</li>
              <li>- bootleg曲目将不会被接受。</li>
              <li>- 您可以使用Vocaloid作为曲子的组成部分，但Vocaloid的名字将不会出现在专辑的credits中。</li>
              <li>- 在被收录进合辑后，您仍然保留您曲目的所有版权。</li>
              <li>- 为了防止抄袭，我们可能会要求您提供您曲目的工程文件，如果在专辑发行后发现了您存在抄袭行为，您的曲目将会被删除，且您将承担由此造成的全部责任。</li>
            </ul>
          </div>
        </div>
        <div class="ss-panel">
          <h4>关于提交</h4>
          <div class="ss-panel-content">
            <p>您可以点击主页里的&ldquo;contact&rdquo;按钮向我们发送您的曲目，或者通过电子邮件将Dropbox/Google Drive的链接连同曲目一起发送到<a target="_top" href="mailto:thoughost.dm@gmail.com">thoughost.dm@gmail.com</a>。电子邮件的标题请写成&rdquo;音乐提交&mdash;（项目的名称）。</p>
            <p>此外，参与者还需在邮件中包含以下信息：</p>
            <ul>
              <li>- 简单的自我介绍</li>
              <li>- 你的曲目标题</li>
              <li>- 活动名义</li>
              <li>- 风格</li>
              <li>- 你的电子邮件地址</li>
              <li>- 你的twitter/facebook帐号</li>
            </ul>
            <p>您提交的曲目必须是未经母带，-6db，44.1kHz，16bit或更大的.wav文件，同时你也可以提交self-mastered版本。</p>
          </div>
        </div>
      </div>
      <div class="content-c">
        <div class="ss-panel">
          <h4>奖励与回报</h4>
          <div class="ss-panel-content">
            <p class="underline">你将会得到&hellip;&hellip;</p>
            <ul>
              <li>- 所有已经母带处理过的曲目。</li>
              <li>- 所有的设计作品。</li>
              <li>- 我们会在专辑发行后的第一个月、第四个月、第八个月和第十二个月将专辑的收入分给参与者。付款方式为PayPal（海外参与者）或Amazon礼品卡（日本参与者），以及支付宝（国内参与者）。</li>
            </ul>
          </div>
        </div>
        <div class="ss-panel">
          <h4>关于审核</h4>
          <div class="ss-panel-content">
            <p>想灵的成员将负责审核。在某些情况下，出于负责的态度考虑，我们可能会邀请外援参与审核的判断。审核的过程大约需要一个月的时间。在审核结束后，我们将只会给被收录的参与者联系，同时我们不会对您的作品给出任何评论和建议。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-jp" :class="{'panel-activate': lang=='jp'}">
      <h3><a target="_top" href="#project1" data-toggle="collapse">{{content.title}}</a></h3>
      <div class="content-p collapse show" id="project1">
        <p v-html="content.content"></p>
        <p>
          <strong>〆切：</strong> {{content.deadline}}
          <br />
          <strong>発売日：</strong> {{content.release}}
        </p>
        <p><strong>ルール</strong></p>
        <p v-for="r in [...new Array(content.rules.length).keys()]" :key="r">{{r+1}}. {{content.rules[r]}}</p>
        <p style="margin-bottom: 0;"><strong>ルールに合わない作品は、審査対象外となりますので、ご注意ください。</strong></p>
        <div class="submit-wrapper"><a target="_top" class="submit" href="https://forms.gle/oG1YHhTrJACY3RVi9">SUBMIT</a></div>
      </div>
      <hr />
    </div>
    <div class="panel panel-jp" :class="{'panel-activate': lang=='jp'}">
      <h3>COMMON RULES</h3>
      <div class="content-c">
        <div class="ss-panel">
          <h4>Music Submission Rules</h4>
          <div class="ss-panel-content">
            <p class="underline">WHAT WE WANT:（サウンドについて）</p>
            <p>クリエイティブかつ個性のあるサウンド。</p>
            <p class="underline"><em>ATTENTION:（共通ルールについて）</em></p>
            <ul>
              <li>- 一人で何作品でも応募可能です。</li>
              <li>- 既にリリースされた曲は受付を致しません。</li>
              <li>- ブートレグトラックに関しましては受付を致しません。</li>
              <li>- VOCALOIDの使用に関して制約は致しませんが、ただし使用したVOCALOIDの名前はクレジットに記載致しません。</li>
              <li>- Thoughostは提出者の音源の権利を保持しません。当選した曲も、落選した曲も、ご自由にお使い下さい。（但し当選した曲をネットでアップロードする場合は、自分のマスタリングバージョンをお使いください）</li>
              <li>- 盗作防止の為、通過者がパラデータの提出をして頂く場合が御座います。発売後に他作品の盗用が発覚した場合は、費用や予想される売上を含め、全ての責任を負って頂きます。</li>
            </ul>
          </div>
        </div>
        <div class="ss-panel">
          <h4>ABOUT SUBMISSION（提出について）</h4>
          <div class="ss-panel-content">
            <p>HPの「Contact」ボタンをクリックして、応募曲を送信することが出来ます。 また、下記のメールアドレスより、応募曲を送信するのも可能で御座います。その際は、DropboxやGoogle DriveなどのURLで提出するか、またはメールに音源を添付してください。件名は「（標題）応募曲ご提出の件」にしていただければ幸いです。 （<a target="_top" href="mailto:thoughost.dm@gmail.com">thoughost.dm@gmail.com</a>）</p>
            <p>音源とともに、以下の情報を書いてお送り下さい。</p>
            <ul>
              <li>- 自己紹介</li>
              <li>- 曲名</li>
              <li>- 活動名義</li>
              <li>- ジャンル</li>
              <li>- 連絡用メールアドレス</li>
              <li>- 活動場所（twitter/facebookアカウントなど）</li>
            </ul>
            <p>提出する音源は、未マスタリングの-6db, 44.1kHz, 16-bit（あるいは16-bit以上）wavファイルをお送り下さい。</p>
          </div>
        </div>
      </div>
      <div class="content-c">
        <div class="ss-panel">
          <h4>REWARD（報酬について）</h4>
          <div class="ss-panel-content">
            <p class="underline">公募通過者の方には</p>
            <ul>
              <li>- アルバムのマスター済トラック。</li>
              <li>- アルバムのアートワークのデータをお送り致します。</li>
              <li>- また、報酬につきましては、１年間の売上を参加の作曲者の人数に等分して、発売日からの第1、4、8、12月にお支払いいたします。 日本に在住していらっしゃる方はアマゾンギフトカードでお支払いいたします。海外に在住していらっしゃる方はPaypalでお支払いいたします。</li>
            </ul>
          </div>
        </div>
        <div class="ss-panel">
          <h4>JUDGMENT（審査について）</h4>
          <div class="ss-panel-content">
            <p>審査は、当サークルのメンバーが行います。また、状況によっては外部からお招きしたゲスト審査員のご意見を求める場合が御座います。 審査には約1ヶ月が掛かります。なお、通過者にしか連絡は致しません。曲のコメントは聞かれましても、原則お答えいたしません。あらかじめ御了承下さい。</p>
          </div>
        </div>
      </div>
    </div>
    <!-- tool bar -->
    <div class="sidebar-wrapper">
      <div class="sidebar">
        <a target="_top" class="item item-en" :class="{'item-activate': lang=='en'}" @click="lang='en'">En</a>
        <a target="_top" class="item item-jp" :class="{'item-activate': lang=='jp'}" @click="lang='jp'">日</a>
        <a target="_top" class="item item-zh" :class="{'item-activate': lang=='zh'}" @click="lang='zh'">中</a></div>
    </div>
  </div>
</div>
</template>

<style scoped>
.project-page .panel {
  display: none;
  visibility: hidden;
}

.project-page .panel-activate {
  display: block;
  visibility: visible;
}

.project-page .panel h3 {
  font-size: 1.4rem;
  text-align: center;
  font-weight: 600;
  margin: 40px 0;
  position: relative;
}

.project-page .panel h3 a {
  transition: color 0.3s ease;
}

.project-page .panel h3 a:hover {
  color: #555;
  text-decoration: none;
}

.project-page .panel .more-title::after {
  content: 'NOW!!';
  display: inline-block;
  margin: 0 0 0 10px;
  font-size: 0.5rem;
  vertical-align: top;
  color: red;
}

.project-page .panel ul {
  padding: 0;
  font-size: 0.9rem;
}

.project-page .panel li {
  list-style-type: none;
  margin-bottom: 1rem;
}

.project-page .panel p {
  font-size: 0.9rem;
}

.project-page .panel .content-p {
  padding: 0 10%;
  overflow: hidden;
}

.project-page .panel .content-p .submit-wrapper {
  text-align: center;
  padding: 40px 0 60px;
}

.project-page .panel .content-p .submit {
  padding: 10px 30px;
  background-color: black;
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.project-page .panel .content-p .submit:hover {
  background-color: #333;
}

.project-page .panel .content-p .submit:hover {
  text-decoration: none;
}

.project-page .panel hr {
  margin: 0;
  border-top: 2px solid black;
}

.project-page .panel .content-c {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
}

.project-page .panel .ss-panel {
  width: 46%;
}

.project-page .panel .ss-panel h4 {
  font-size: 1.0rem;
  margin-bottom: 20px;
  font-weight: 600;
  margin: 20px 0;
  text-transform: uppercase;
}

.project-page .panel .ss-panel a {
  color: cornflowerblue;
}

.project-page .panel .ss-panel .ss-panel-content {
  padding-left: 20px;
  position: relative;
}

.project-page .panel .ss-panel .ss-panel-content .underline {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 0.3rem 0 0.2rem;
}

.project-page .panel .ss-panel .ss-panel-content::before {
  content: '';
  background-color: black;
  display: block;
  width: 3px;
  height: 1.2rem;
  position: absolute;
  left: 0;
}

.project-page .sidebar-wrapper {
  position: fixed;
  top: 18rem;
  left: 0;
  right: 0;
  max-width: 100vh;
  margin: auto;
  text-align: right;
}

.project-page .sidebar-wrapper .sidebar {
  display: inline-block;
  opacity: 1;
  transition: all 0.3s ease;
  background-color: white;
}

.project-page .sidebar-wrapper .sidebar:hover {
  display: inline-block;
  opacity: 1;
}

.project-page .sidebar-wrapper .sidebar .item {
  display: block;
  border: 2px solid #333;
  text-align: center;
  height: 2rem;
  width: 2rem;
  line-height: 1.7rem;
  margin: 0.2rem 0;
  border-radius: 3px;
  cursor: pointer;
  background-color: white;
}

.project-page .sidebar-wrapper .sidebar .item-activate {
  color: white;
  background-color: #333;
}

.panel-zh{
  font-family: 'Noto Sans SC', sans-serif;
}
</style>
