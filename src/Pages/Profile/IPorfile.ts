type transaction = {
  from: {
    currency: string
    amount: number
  }

  to: {
    currency: string
    amount: number
  }
}

export default interface IProfile {
  name: string,
  imgUrl: string,
  transactions: transaction[],
  balance: number
}
