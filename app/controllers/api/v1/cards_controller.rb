class API::V1::CardsController < ApplicationController 
    protect_from_forgery unless: -> { request.format.json? }
    def index
    end 
    def create
        binding.pry
    end 
end 