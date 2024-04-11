import * as bcrypt from 'bcrypt';

/**
 * 입력받은 평문에 bcrypt 알고리즘을 적용합니다. (비밀번호 암호화)
 *
 * @param plainText
 */
export const Hashing = async (plainText: string): Promise<string> => {
  const saltOrRounds = 10;
  return await bcrypt.hash(plainText, saltOrRounds);
};

/**
 * 저장되어 있는 hashPassword 와 입력받은 password 를 비교합니다.
 *
 * @param password
 * @param hashPassword
 */
export const isHashValid = async (password, hashPassword): Promise<boolean> => {
  return await bcrypt.compare(password, hashPassword);
};
