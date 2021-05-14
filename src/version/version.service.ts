import { Injectable } from '@nestjs/common';
import { getLastCommit } from 'git-last-commit'
@Injectable()
export class VersionService {
  async getCurrentGitVersion() {
    return await new Promise((res, rej) => {
      getLastCommit((err, commit) => {
        if (err) return rej(err)
        return res(commit)
      })
    })
  }
}
