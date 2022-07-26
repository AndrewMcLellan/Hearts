class Api::V1::DecksController < ApplicationController 
    protect_from_forgery unless: -> { request.format.json? }
    def index
        render json: {blah: 'foo'}
    end 
    def create
        # binding.pry
        d = Deck.new(deck_id: params[:deckId])
        if d.save
            render json: {success: true}
        else 
            render json: {success: false}
        end 
        # save cards here too. 
    end 
end 