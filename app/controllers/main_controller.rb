class MainController < ApplicationController


	def new

		@home = true

	end

	def travel

		@home = false

	end

	def story

		@home = false

	end

	def details

		@home = false

	end
	
end
