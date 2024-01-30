export interface signUp {
    teamName: string,
    password: string,
    image:string,
    color:string
    
}

export interface login {
    teamName:string,
    password: string
}
export interface manager {
    teamName: string,
    password: string,
    image: string,
    color:string
}
export interface player {
    playerName: string,
    auctionPrice: number,
    category: string,
    team: string,
    image:string,
    strength:string,
    weakness:string,
    status: string
}