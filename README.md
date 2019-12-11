[![Build Status](https://travis-ci.org/ossmeasures/circleci_nodejs_handson.svg?branch=master)](https://travis-ci.org/ossmeasures/circleci_nodejs_handson)
[![codecov](https://codecov.io/gh/ossmeasures/circleci_nodejs_handson/branch/master/graph/badge.svg)](https://codecov.io/gh/ossmeasures/circleci_nodejs_handson)

# circleci_nodejs_handson

CircleCI でテストを実行するサンプルプロジェクトです。<br>
CircleCI でのテストのほか、TravisCI と GitHub Actions の使用例も含めています。

### 技術スタック

| Category   | Library                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Language   | [Node.js](https://nodejs.org/ja/)                                                                                            |
| Unit test  | [jest](https://jestjs.io/)                                                                                                   |
| CI Service | [CircleCI](https://circleci.com/), [TravisCI](https://travis-ci.org/), [GitHub Actions](https://github.com/features/actions) |

### 課題

1. このリポジトリをクローンして自分のリポジトリに置き換えて GitHub に PUSH してみましょう。
1. 自分のリポジトリに PUSH したコードを好きな CI サービス上で実行してみましょう。
1. テストカバレッジが 100%となるようにテストコードを書いてみましょう。
1. PullRequest を立てると自動的にテストカバレッジを集計して PullRequest のコメントにカバレッジが自動投稿されるようにしてみましょう。
